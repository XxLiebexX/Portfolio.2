"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Graph3DWave from "@/components/canvas/Graph3DWave";

function FloatingDust({ count = 60 }) {
  const points = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, [count]);

  useFrame((_, delta) => {
    if (points.current) {
      points.current.rotation.y -= delta * 0.015;
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
        size={0.03}
        color="#0284c7"
        sizeAttenuation
        transparent
        opacity={0.3}
      />
    </points>
  );
}

export default function BackgroundCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 1, 9], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[0, 10, 5]} intensity={1.2} color="#00e5ff" />
        <pointLight position={[-10, 5, 5]} intensity={1.5} color="#0284c7" />

        {/* Interactive 3D Perspective Wave Graph */}
        <Graph3DWave />

        {/* Ambient Spatial Dust */}
        <FloatingDust count={60} />
      </Canvas>
    </div>
  );
}
