import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";
import Navbar from "./Navbar";

export default function About3D() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center h-screen w-full">
        <section className="w-2/4 h-2/4 text-center bg-black">
          <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1.2} />

            {/* Estrellas de fondo */}
            <Stars radius={100} depth={50} count={10000} factor={4} fade />

            {/* Texto 3D centrado */}
            <Center>
              <Text3D
                font="/public/fonts/Inter 18pt Light_Regular.json"
                size={1}
                height={0.5}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.0001}
                bevelSize={0.02}
                bevelSegments={5}
                bevelOffset={0}
              >
                Hola
                <meshStandardMaterial color="white" />
              </Text3D>
            </Center>

            <OrbitControls enableZoom={false} />
          </Canvas>
        </section>
      </div>
    </>
  );
}
