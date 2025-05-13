import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Link } from 'react-router-dom';


const TorusKont = () => {
    const meshRef = useRef();

    // Rotate the mesh on each frame
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
      }
    });
  
    return (
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.4, 100, 16, 2, 3]} />
        <meshBasicMaterial color="white" wireframe />
      </mesh>
    );
  };
  
  // Main Component
  const ErrorPage = () => {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-sans">
        {/* Header */}
        {/* <header className="absolute top-0 w-full flex justify-between items-center p-4">
          <div className="text-lg font-bold">ABO Digital</div>
          <nav className="space-x-6">
            <a href="#" className="hover:text-gray-400">Team</a>
            <a href="#" className="hover:text-gray-400">Portfolio</a>
            <a href="#" className="hover:text-gray-400">News</a>
            <a href="#" className="hover:text-gray-400">ABO ↗</a>
          </nav>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Get in touch
          </button>
        </header> */}
  
        {/* Main Content */}
        <div className="flex items-center justify-center space-x-10">
          {/* Text Section */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-6xl font-bold">
              Oops! <br /> You've taken a <br /> wrong turn.
            </h1>
            <button className="self-start border border-white px-4 py-2 rounded hover:bg-white hover:text-black flex items-center space-x-2">
             <Link to='/'><span>Let me guide you home</span>
              <span>→</span></Link> 
            </button>
          </div>
  
          {/* 3D Animation Section */}
          <div className="w-[300px] h-[300px]">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <TorusKont />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
        </div>
      </div>
    );
}

export default ErrorPage;
