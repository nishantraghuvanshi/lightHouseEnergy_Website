// components/DonutModel.js
"use client"
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Donut({ position, rotation }) {
  const { scene } = useGLTF("/donut.glb");
  return (
    <primitive
      object={scene}
      scale={0.5}
      position={position}
      rotation={rotation}
    />
  );
}

export default function DonutModel() {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 20 }} // Adjust camera position and field of view
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 5]} />
          <Donut
            position={[0, 0, 0]}
            rotation={[Math.PI / 4, Math.PI / 4, 0]}
          />{" "}
          {/* Adjust rotation here */}
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
