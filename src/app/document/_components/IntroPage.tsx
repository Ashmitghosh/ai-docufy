import React from 'react';
import { 
  Aperture, 
  Code, 
  Database, 
  Cpu, 
  Network 
} from 'lucide-react';

const AnimatedAvatar = () => {
  return (
    <div className="relative w-full max-w-md h-96 bg-gray-900 rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-48 h-48">
          {/* Rotating icons */}
          <Aperture 
            className="absolute top-0 left-0 text-blue-500 opacity-50 animate-spin-slow" 
            size={64} 
            style={{animationDuration: '8s'}}
          />
          <Code 
            className="absolute bottom-0 right-0 text-green-500 opacity-50 animate-spin-reverse-slow" 
            size={64} 
            style={{animationDuration: '6s'}}
          />
          <Database 
            className="absolute top-0 right-0 text-purple-500 opacity-50 animate-pulse" 
            size={64}
          />
          <Cpu 
            className="absolute bottom-0 left-0 text-red-500 opacity-50 animate-bounce" 
            size={64}
          />
          
          {/* Central network icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Network 
              className="text-white animate-ping-slow" 
              size={96} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function IntroPage() {
  return (
    <div className="bg-black text-white min-h-dvh flex flex-col">
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-none bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
                Ink your imagination.
              </h1>
              <p className="max-w-[600px] text-gray-300 text-lg md:text-xl">
              Effortlessly capture and organize your thoughts with our AI-driven note-taking app. 
              </p>
            </div>
            <div className="hidden md:flex justify-center items-center">
              <AnimatedAvatar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}