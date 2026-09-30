"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { CatmullRomCurve3, TubeGeometry, Vector3, type Group } from "three";
import { heroState } from "./heroState";

const TUBULAR = 520;
const RADIAL = 20;

interface WaxRibbonProps {
  points: [number, number, number][];
  thickness: number;
  delay: number;
  duration?: number;
  color?: string;
}

// A liquid "melted wax" ribbon: a tube whose radius swells and pinches along its
// length, drawn in progressively (drawRange) and unwound again on scroll.
export function WaxRibbon({ points, thickness, delay, duration = 2.4, color = "#1f2e25" }: WaxRibbonProps) {
  const group = useRef<Group>(null);

  const geometry = useMemo(() => {
    const curve = new CatmullRomCurve3(points.map((p) => new Vector3(...p)), false, "catmullrom", 0.5);
    const geo = new TubeGeometry(curve, TUBULAR, 1, RADIAL, false);
    const pos = geo.attributes.position;
    const center = new Vector3();
    const v = new Vector3();

    for (let i = 0; i <= TUBULAR; i++) {
      const u = i / TUBULAR;
      curve.getPointAt(u, center);
      const taper = Math.pow(Math.sin(Math.PI * u), 0.55);
      const swell = 0.55 + 0.45 * Math.sin(u * 21 + 0.6) * Math.sin(u * 7.3);
      const r = thickness * (0.25 + taper * (0.75 + swell * 0.9));
      for (let j = 0; j <= RADIAL; j++) {
        const idx = i * (RADIAL + 1) + j;
        v.fromBufferAttribute(pos, idx).sub(center).multiplyScalar(r);
        // Flatten slightly so the ribbon reads as a poured liquid rather than a pipe.
        v.y *= 0.72;
        pos.setXYZ(idx, center.x + v.x, center.y + v.y, center.z + v.z);
      }
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    geo.setDrawRange(0, 0);
    return geo;
  }, [points, thickness]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const intro = Math.min(Math.max((t - delay) / duration, 0), 1);
    const eased = 1 - Math.pow(1 - intro, 3);
    const visible = Math.max(eased - heroState.progress * 0.9, 0);
    const total = geometry.index ? geometry.index.count : 0;
    const perSegment = RADIAL * 6;
    geometry.setDrawRange(0, Math.floor((total * visible) / perSegment) * perSegment);

    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.25) * 0.08 + heroState.progress * 0.8;
      group.current.rotation.z = Math.sin(t * 0.35) * 0.03;
      group.current.position.y = Math.sin(t * 0.6) * 0.05;
    }
  });

  return (
    <group ref={group}>
      <mesh geometry={geometry} castShadow>
        <meshPhysicalMaterial color={color} roughness={0.12} metalness={0.05} clearcoat={1} clearcoatRoughness={0.08} />
      </mesh>
    </group>
  );
}
