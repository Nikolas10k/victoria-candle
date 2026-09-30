"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { DoubleSide, type Group, type Mesh, type PointLight } from "three";
import { createLabelTexture } from "./labelTexture";
import { heroState } from "./heroState";

const JAR_RADIUS = 1;
const JAR_HEIGHT = 2.2;

export function Candle() {
  const lid = useRef<Group>(null);
  const flame = useRef<Mesh>(null);
  const flameLight = useRef<PointLight>(null);
  const gl = useThree((state) => state.gl);
  const label = useMemo(() => createLabelTexture(gl.capabilities.getMaxAnisotropy()), [gl]);

  useEffect(() => () => label.dispose(), [label]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const p = heroState.progress;

    if (lid.current) {
      // The lid hovers above the open jar and rises further as the visitor scrolls.
      lid.current.position.y = JAR_HEIGHT / 2 + 0.55 + Math.sin(t * 1.3) * 0.06 + p * 0.9;
      lid.current.rotation.x = -0.32 + Math.sin(t * 0.9) * 0.04 - p * 0.3;
      lid.current.rotation.z = 0.18 + Math.cos(t * 0.7) * 0.03;
    }

    const flicker = 1 + Math.sin(t * 17) * 0.06 + Math.sin(t * 29 + 1.3) * 0.05;
    if (flame.current) {
      flame.current.scale.set(0.075 * (2 - flicker), 0.2 * flicker, 0.075 * (2 - flicker));
      flame.current.position.x = Math.sin(t * 5) * 0.008;
    }
    if (flameLight.current) flameLight.current.intensity = 2.2 * flicker;
  });

  return (
    <group>
      {/* Glass jar */}
      <mesh castShadow>
        <cylinderGeometry args={[JAR_RADIUS, JAR_RADIUS * 0.97, JAR_HEIGHT, 96, 1, true]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={1}
          thickness={0.35}
          roughness={0.06}
          ior={1.45}
          clearcoat={1}
          clearcoatRoughness={0.05}
          side={DoubleSide}
          transparent
        />
      </mesh>
      <mesh position-y={-JAR_HEIGHT / 2 + 0.06}>
        <cylinderGeometry args={[JAR_RADIUS * 0.97, JAR_RADIUS * 0.97, 0.12, 96]} />
        <meshPhysicalMaterial color="#ffffff" transmission={1} thickness={0.6} roughness={0.08} />
      </mesh>

      {/* Wax */}
      <mesh position-y={-0.2}>
        <cylinderGeometry args={[JAR_RADIUS * 0.93, JAR_RADIUS * 0.91, 1.7, 96]} />
        <meshPhysicalMaterial color="#f4ebd7" roughness={0.55} sheen={1} sheenColor="#fff4de" />
      </mesh>

      {/* Label: a sticker on the outside of the glass, so it stays crisp instead of
          being seen through the (lower resolution) transmission pass. */}
      <mesh position-y={-0.15} renderOrder={2}>
        <cylinderGeometry args={[0.998, 0.981, 1.25, 128, 1, true, -0.78, 1.56]} />
        <meshStandardMaterial map={label} roughness={0.62} polygonOffset polygonOffsetFactor={-1} />
      </mesh>

      {/* Wooden wick */}
      <mesh position-y={0.78}>
        <boxGeometry args={[0.16, 0.2, 0.025]} />
        <meshStandardMaterial color="#6b4a2f" roughness={0.9} />
      </mesh>

      {/* Flame */}
      <mesh ref={flame} position-y={1.02}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshBasicMaterial color="#ffc46b" toneMapped={false} />
      </mesh>
      <pointLight ref={flameLight} position={[0, 1.15, 0]} color="#ffb35c" distance={4} decay={2} />

      {/* Gold lid */}
      <group ref={lid} position-y={JAR_HEIGHT / 2 + 0.55}>
        <mesh castShadow>
          <cylinderGeometry args={[JAR_RADIUS * 1.04, JAR_RADIUS * 1.04, 0.2, 96]} />
          <meshStandardMaterial color="#d3b06a" metalness={1} roughness={0.28} envMapIntensity={1.4} />
        </mesh>
        <mesh position-y={-0.11}>
          <cylinderGeometry args={[JAR_RADIUS * 0.96, JAR_RADIUS * 0.96, 0.05, 96]} />
          <meshStandardMaterial color="#e8dcc4" roughness={0.8} />
        </mesh>
      </group>
    </group>
  );
}
