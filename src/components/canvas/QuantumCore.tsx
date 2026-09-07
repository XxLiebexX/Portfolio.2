"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function SpatialCoreArtifact() {
  const rootGroup = useRef<THREE.Group>(null);
  const chipCore = useRef<THREE.Mesh>(null);
  const glassLayer = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    // 6-DOF smooth mouse tracking
    targetRotation.current.x = state.pointer.y * 0.4;
    targetRotation.current.y = state.pointer.x * 0.6;

    if (rootGroup.current) {
      rootGroup.current.rotation.x = THREE.MathUtils.lerp(
        rootGroup.current.rotation.x,
        targetRotation.current.x,
        0.05
      );
      rootGroup.current.rotation.y = THREE.MathUtils.lerp(
        rootGroup.current.rotation.y,
        targetRotation.current.y,
        0.05
      );
    }

    if (chipCore.current) {
      chipCore.current.rotation.y += delta * 0.35;
      chipCore.current.rotation.x += delta * 0.2;
    }
    if (glassLayer.current) {
      glassLayer.current.rotation.y -= delta * 0.25;
      glassLayer.current.rotation.z += delta * 0.15;
    }
    if (ring1.current) {
      ring1.current.rotation.x += delta * 0.45;
      ring1.current.rotation.y += delta * 0.3;
    }
    if (ring2.current) {
      ring2.current.rotation.z -= delta * 0.4;
      ring2.current.rotation.x -= delta * 0.2;
    }
  });

  return (
    <group ref={rootGroup}>
      {/* Central High-Contrast Geometric Core */}
      <mesh ref={chipCore} scale={1.15}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#0f172a"
          roughness={0.2}
          metalness={0.9}
          emissive="#0284c7"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Glowing Wireframe Circuit Substrate */}
      <mesh scale={1.16}>
        <octahedronGeometry args={[1.2, 1]} />
        <meshBasicMaterial
          color="#00b4d8"
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Outer Refractive Sapphire Glass Shell */}
      <mesh ref={glassLayer} scale={1.38}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.9}
          opacity={1}
          transparent
          roughness={0.08}
          ior={1.5}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>

      {/* Orbiting Titanium Ring 1 */}
      <mesh ref={ring1}>
        <torusGeometry args={[2.05, 0.025, 16, 120]} />
        <meshStandardMaterial
          color="#0284c7"
          emissive="#0284c7"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Orbiting Titanium Ring 2 */}
      <mesh ref={ring2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.38, 0.02, 16, 120]} />
        <meshStandardMaterial
          color="#64748b"
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}

function QuantumDustParticles({ count = 140 }) {
  const points = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.2 + Math.random() * 2.0;
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(theta);
    }
    return positions;
  }, [count]);

  useFrame((_, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#0284c7"
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
}

export default function QuantumCoreCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border border-border border-t-accent animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-8, -5, -4]} intensity={2.0} color="#00e5ff" />
        <pointLight position={[6, -4, 4]} intensity={1.2} color="#0284c7" />

        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
          <SpatialCoreArtifact />
          <QuantumDustParticles count={130} />
        </Float>
      </Canvas>
    </div>
  );
}
