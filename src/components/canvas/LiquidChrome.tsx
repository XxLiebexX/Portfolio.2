"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function MorphingLiquidMercury() {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // 6-DOF smooth mouse parallax tracking
    targetRotation.current.x = state.pointer.y * 0.45;
    targetRotation.current.y = state.pointer.x * 0.65;

    if (meshRef.current) {
      // Smooth lerp to mouse
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotation.current.x + Math.sin(time * 0.4) * 0.15,
        0.05
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotation.current.y + time * 0.35,
        0.05
      );
      meshRef.current.rotation.z = Math.cos(time * 0.3) * 0.2;

      // Subtle breathing scale pulse
      const pulse = 1 + Math.sin(time * 1.2) * 0.035;
      meshRef.current.scale.set(pulse * 1.35, pulse * 1.35, pulse * 1.35);
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      {/* Complex sculptural fluid knot */}
      <torusKnotGeometry args={[1.05, 0.36, 180, 42, 3, 5]} />
      <meshPhysicalMaterial
        color="#ffffff"
        metalness={1.0}
        roughness={0.06}
        clearcoat={1.0}
        clearcoatRoughness={0.03}
        reflectivity={1.0}
        emissive="#090d16"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

export default function LiquidChrome() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center font-mono text-xs text-foreground-muted">
        <span>INITIALIZING LIQUID CHROME...</span>
      </div>
    );
  }

  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing select-none">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        {/* High-contrast Studio Reflections Lighting */}
        <ambientLight intensity={0.9} />
        {/* Key Light */}
        <directionalLight position={[6, 8, 7]} intensity={2.2} color="#ffffff" />
        {/* Sharp Rim Light 1 */}
        <directionalLight position={[-8, -5, -4]} intensity={2.0} color="#e0e7ff" />
        {/* Sharp Rim Light 2 */}
        <directionalLight position={[0, -6, 5]} intensity={1.2} color="#38bdf8" />
        {/* Top Specular Spot */}
        <pointLight position={[0, 5, 2]} intensity={2.5} color="#ffffff" />

        <Float speed={2.0} rotationIntensity={0.4} floatIntensity={0.6}>
          <MorphingLiquidMercury />
        </Float>
      </Canvas>
    </div>
  );
}
