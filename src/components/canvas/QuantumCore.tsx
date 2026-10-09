"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function CeramicSculpturalCore() {
  const rootGroup = useRef<THREE.Group>(null);
  const innerSphere = useRef<THREE.Mesh>(null);
  const outerShell = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    // Smooth, damped mouse parallax tracking
    targetRotation.current.x = state.pointer.y * 0.35;
    targetRotation.current.y = state.pointer.x * 0.5;

    if (rootGroup.current) {
      rootGroup.current.rotation.x = THREE.MathUtils.lerp(
        rootGroup.current.rotation.x,
        targetRotation.current.x,
        0.04
      );
      rootGroup.current.rotation.y = THREE.MathUtils.lerp(
        rootGroup.current.rotation.y,
        targetRotation.current.y,
        0.04
      );
    }

    if (innerSphere.current) {
      innerSphere.current.rotation.y += delta * 0.25;
      innerSphere.current.rotation.x += delta * 0.12;
    }
    if (outerShell.current) {
      outerShell.current.rotation.y -= delta * 0.18;
      outerShell.current.rotation.z += delta * 0.1;
    }
    if (ring1.current) {
      ring1.current.rotation.x += delta * 0.3;
      ring1.current.rotation.y += delta * 0.2;
    }
    if (ring2.current) {
      ring2.current.rotation.z -= delta * 0.25;
      ring2.current.rotation.x -= delta * 0.15;
    }
  });

  return (
    <group ref={rootGroup}>
      {/* 1. Sculptural Ceramic Inner Core */}
      <mesh ref={innerSphere} scale={1.2}>
        <sphereGeometry args={[1.05, 64, 64]} />
        <meshPhysicalMaterial
          color="#f4f3ed"
          roughness={0.16}
          metalness={0.04}
          clearcoat={1}
          clearcoatRoughness={0.08}
          reflectivity={0.9}
        />
      </mesh>

      {/* 2. Frosted Glass Ergonomic Shell Segments */}
      <mesh ref={outerShell} scale={1.38}>
        <torusKnotGeometry args={[0.75, 0.26, 128, 32, 2, 3]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.88}
          opacity={1}
          transparent
          roughness={0.1}
          ior={1.48}
          metalness={0.05}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>

      {/* 3. Subtle Titanium Gimbal Ring 1 */}
      <mesh ref={ring1}>
        <torusGeometry args={[2.0, 0.02, 16, 120]} />
        <meshStandardMaterial
          color="#94a3b8"
          roughness={0.25}
          metalness={0.85}
        />
      </mesh>

      {/* 4. Subtle Titanium Gimbal Ring 2 */}
      <mesh ref={ring2} rotation={[Math.PI / 3, 0, Math.PI / 4]}>
        <torusGeometry args={[2.2, 0.015, 16, 120]} />
        <meshStandardMaterial
          color="#cbd5e1"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}

export default function QuantumCore() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center font-mono text-xs text-foreground-muted">
        <span>INITIALIZING SCULPTURAL CORE...</span>
      </div>
    );
  }

  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing select-none">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        {/* Soft Studio Lighting */}
        <ambientLight intensity={1.1} />
        <directionalLight position={[5, 8, 6]} intensity={1.6} color="#ffffff" />
        <directionalLight position={[-6, -4, -4]} intensity={0.5} color="#e2e8f0" />
        <pointLight position={[0, 4, 3]} intensity={1.2} color="#f8fafc" />

        <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.5}>
          <CeramicSculpturalCore />
        </Float>
      </Canvas>
    </div>
  );
}
