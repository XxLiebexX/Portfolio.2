"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Graph3DWave() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const geometryRef = useRef<THREE.PlaneGeometry>(null);

  // Dimensions & resolution for 3D mathematical graph
  const width = 34;
  const height = 34;
  const segments = 40;

  // Cache initial base positions
  const basePositions = useMemo(() => {
    const geo = new THREE.PlaneGeometry(width, height, segments, segments);
    return new Float32Array(geo.attributes.position.array);
  }, []);

  const pointerTarget = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!geometryRef.current) return;

    // Slow, serene time progression
    const time = state.clock.getElapsedTime() * 0.55;
    const positionAttr = geometryRef.current.attributes.position;
    const positions = positionAttr.array as Float32Array;

    // Smooth, gentle pointer lerp
    pointerTarget.current.x = THREE.MathUtils.lerp(
      pointerTarget.current.x,
      state.pointer.x * 8,
      0.04
    );
    pointerTarget.current.y = THREE.MathUtils.lerp(
      pointerTarget.current.y,
      state.pointer.y * 8,
      0.04
    );

    const px = pointerTarget.current.x;
    const py = pointerTarget.current.y;

    // Displace vertices with smooth mathematical wave
    for (let i = 0; i < positions.length; i += 3) {
      const x = basePositions[i];
      const y = basePositions[i + 1];

      // Calm multi-sine formula
      const wave1 = Math.sin(x * 0.25 + time) * Math.cos(y * 0.25 + time) * 0.35;
      const wave2 = Math.sin(x * 0.5 - time * 0.7) * Math.cos(y * 0.5 + time * 0.7) * 0.15;

      // Gentle mouse elevation ripple
      const dx = x - px;
      const dy = y - py;
      const distSq = dx * dx + dy * dy;
      const mouseElevation = Math.exp(-distSq * 0.1) * 0.65;

      positions[i + 2] = wave1 + wave2 + mouseElevation;
    }

    positionAttr.needsUpdate = true;

    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group position={[0, -2.8, -5]} rotation={[-Math.PI / 2.6, 0, 0]}>
      {/* 1. Subtle, Calm Wireframe Grid */}
      <mesh ref={meshRef}>
        <planeGeometry
          ref={geometryRef}
          args={[width, height, segments, segments]}
        />
        <meshStandardMaterial
          wireframe
          color="#94a3b8"
          roughness={0.7}
          metalness={0.1}
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* 2. Soft Floating Nodes at Intersections */}
      {geometryRef.current && (
        <points ref={pointsRef} geometry={geometryRef.current}>
          <pointsMaterial
            size={0.035}
            color="#64748b"
            sizeAttenuation
            transparent
            opacity={0.18}
          />
        </points>
      )}
    </group>
  );
}
