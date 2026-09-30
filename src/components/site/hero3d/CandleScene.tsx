"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Float, Lightformer } from "@react-three/drei";
import type { Group } from "three";
import { Candle } from "./Candle";
import { WaxRibbon } from "./WaxRibbon";
import { heroState } from "./heroState";

const MAIN_RIBBON: [number, number, number][] = [
  [-7, 1.9, -0.6],
  [-4.4, 1.5, 0.4],
  [-2.3, 1.05, 1.4],
  [-0.2, 0.75, 1.75],
  [1.5, 0.45, 1.1],
  [1.95, 0.05, -0.2],
  [0.9, -0.25, -1.55],
  [-0.9, -0.45, -1.5],
  [-1.85, -0.65, -0.1],
  [-1.1, -0.85, 1.35],
  [0.8, -1.0, 1.55],
  [2.7, -0.95, 0.6],
  [4.7, -1.35, -0.2],
  [7.2, -1.7, -0.9],
];

const SECOND_RIBBON: [number, number, number][] = [
  [6.8, 2.3, -1.2],
  [4.2, 1.7, -0.6],
  [2.4, 1.45, 0.5],
  [1.2, 1.2, 1.35],
  [-0.4, 1.3, 1.5],
  [-1.6, 1.1, 0.7],
  [-2.8, 1.35, -0.4],
];

function Rig() {
  const root = useRef<Group>(null);
  const candle = useRef<Group>(null);
  const { viewport } = useThree();
  const compact = viewport.width < 5;

  useFrame((_, delta) => {
    const ease = Math.min(delta * 3, 1);
    const p = heroState.progress;
    const c = candle.current;
    if (c) {
      const targetY = heroState.pointerX * 0.45 + p * Math.PI * 2;
      const targetX = -heroState.pointerY * 0.15 + 0.06;
      c.rotation.y += (targetY - c.rotation.y) * ease;
      c.rotation.x += (targetX - c.rotation.x) * ease;
    }
    const r = root.current;
    if (r) {
      r.rotation.x += (-heroState.pointerY * 0.04 - r.rotation.x) * ease;
      r.scale.setScalar((compact ? 0.6 : 0.82) * (1 - p * 0.2));
      r.position.y = (compact ? -0.2 : -0.3) + p * 0.7;
    }
  });

  return (
    <group ref={root} position-x={compact ? 0 : 0.9}>
      <group ref={candle}>
        <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.5}>
          <Candle />
        </Float>
      </group>
      <WaxRibbon points={MAIN_RIBBON} thickness={0.13} delay={0.4} />
      <WaxRibbon points={SECOND_RIBBON} thickness={0.07} delay={1.1} duration={2} />
    </group>
  );
}

export default function CandleScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.9, 8.5], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
      shadows
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 5]} intensity={1.6} castShadow />
      <directionalLight position={[-5, 2, -3]} intensity={0.6} color="#ffe2c2" />
      <Rig />
      <ContactShadows position={[0, -2.1, 0]} opacity={0.28} scale={9} blur={2.6} far={4} color="#3a2f22" />
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={3} position={[0, 4, 4]} scale={[8, 2, 1]} />
        <Lightformer form="rect" intensity={1.5} position={[-5, 1, 2]} rotation-y={Math.PI / 2} scale={[6, 3, 1]} color="#fff1dc" />
        <Lightformer form="rect" intensity={1.2} position={[5, 0, 1]} rotation-y={-Math.PI / 2} scale={[6, 3, 1]} color="#f3e7ff" />
        <Lightformer form="circle" intensity={2} position={[0, -4, 2]} scale={3} color="#ffe6c4" />
        <Lightformer form="rect" intensity={2.5} position={[0, 6, 0]} rotation-x={Math.PI / 2} scale={[10, 10, 1]} color="#fff6e6" />
        <Lightformer form="rect" intensity={1.2} position={[0, 2, -6]} scale={[10, 4, 1]} color="#fbeede" />
      </Environment>
    </Canvas>
  );
}
