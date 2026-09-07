"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Graph3DWave() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const geometryRef = useRef<THREE.PlaneGeometry>(null);

  // Dimensions & resolution for 3D mathematical graph
  const width = 32;
  const height = 32;
  const segments = 46;

  // Cache initial base positions
  const basePositions = useMemo(() => {
    const geo = new THREE.PlaneGeometry(width, height, segments, segments);
    return new Float32Array(geo.attributes.position.array);
  }, []);

  // Smooth pointer target
  const pointerTarget = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!geometryRef.current) return;

    const time = state.clock.getElapsedTime();
    const positionAttr = geometryRef.current.attributes.position;
    const positions = positionAttr.array as Float32Array;

    // Smooth pointer lerp
    pointerTarget.current.x = THREE.MathUtils.lerp(
      pointerTarget.current.x,
      state.pointer.x * 12,
      0.08
    );
    pointerTarget.current.y = THREE.MathUtils.lerp(
      pointerTarget.current.y,
      state.pointer.y * 12,
      0.08
    );

    const px = pointerTarget.current.x;
    const py = pointerTarget.current.y;

    // Displace vertices with mathematical wave function + mouse attraction
    for (let i = 0; i < positions.length; i += 3) {
      const x = basePositions[i];
      const y = basePositions[i + 1];

      // Multi-frequency wave formula
      const wave1 = Math.sin(x * 0.35 + time * 1.1) * Math.cos(y * 0.35 + time * 1.1) * 0.45;
      const wave2 = Math.sin(x * 0.7 - time * 0.8) * Math.cos(y * 0.7 + time * 0.9) * 0.2;

      // Mouse distance elevation ripple
      const dx = x - px;
      const dy = y - py;
      const distSq = dx * dx + dy * dy;
      const mouseElevation = Math.exp(-distSq * 0.08) * 1.1;

      positions[i + 2] = wave1 + wave2 + mouseElevation;
    }

    positionAttr.needsUpdate = true;

    // Also sync the intersection points geometry
    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Subtle global tilt reaction
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(time * 0.1) * 0.03;
    }
  });

  return (
    <group position={[0, -2.5, -4]} rotation={[-Math.PI / 2.8, 0, 0]}>
      {/* 1. Wireframe 3D Perspective Wave Grid */}
      <mesh ref={meshRef}>
        <planeGeometry
          ref={geometryRef}
          args={[width, height, segments, segments]}
        />
        <meshStandardMaterial
          wireframe
          color="#0284c7"
          emissive="#00b4d8"
          emissiveIntensity={0.25}
          roughness={0.4}
          metalness={0.8}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* 2. Glowing Nodes at Grid Intersections */}
      {geometryRef.current && (
        <points ref={pointsRef} geometry={geometryRef.current}>
          <pointsMaterial
            size={0.045}
            color="#00e5ff"
            sizeAttenuation
            transparent
            opacity={0.5}
          />
        </points>
      )}
    </group>
  );
}
