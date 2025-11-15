"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function ImpactRing({ radius, thickness, speed, color }) {
  const ref = useRef();

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * speed;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, thickness, 48, 128]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.1}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

function ImpactScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 3, 4]} intensity={2} color="#ffd27f" />
      <pointLight position={[-3, -2, -4]} intensity={1.2} color="#ff9ed8" />
      <group rotation={[0.6, 0.1, 0]}>
        <ImpactRing radius={3} thickness={0.07} speed={0.15} color="#ffb6f0" />
      </group>
      <group rotation={[-0.3, 0.4, 0.2]}>
        <ImpactRing radius={2.2} thickness={0.05} speed={-0.2} color="#ffd87a" />
      </group>
      <group rotation={[0.1, -0.5, -0.2]}>
        <ImpactRing radius={1.5} thickness={0.04} speed={0.25} color="#ffe4aa" />
      </group>
    </>
  );
}

export default function ImpactOrbit() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-64 md:h-72 opacity-50">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ImpactScene />
      </Canvas>
    </div>
  );
}
