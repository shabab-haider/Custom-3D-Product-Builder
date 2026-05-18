import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Stage } from "@react-three/drei";
import Model from "./Model";

export default function ProductCanvas() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <Canvas
        // Preserving the drawing buffer lets you easily take screenshots/save designs later
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, 2], fov: 45 }}
      >
        {/* Soft, ambient lighting for general visibility */}
        <ambientLight intensity={0.5} />

        {/* Main directional light acting like sunlight */}
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* Secondary soft light to fill shadows on the opposite side */}
        <directionalLight position={[-10, 5, -5]} intensity={0.3} />

        {/* Stage automatically centers, scales, and drops a shadow for the model */}
        <Stage
          environment="city"
          intensity={0.6}
          contactShadow={{ blur: 2, opacity: 0.5 }}
        >
          <Center>
            <Model />
          </Center>
        </Stage>

        {/* Enables user interaction (rotate, pan, zoom) */}
        <OrbitControls
          enablePan={false} // Stops the user from dragging the shirt off-screen
          enableZoom={false}
          minDistance={1} // Restricts zooming too close
          maxDistance={4} // Restricts zooming too far out
          minPolarAngle={Math.PI / 2} // Locks vertical rotation at the horizon line
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
