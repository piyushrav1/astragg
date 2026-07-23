'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, useAspect } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

const TEXTUREMAP = { src: 'https://i.postimg.cc/XYwvXN8D/img-4.png' };
const DEPTHMAP = { src: 'https://i.postimg.cc/2SHKQh2q/raw-4.webp' };

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform sampler2D tMap;
uniform sampler2D tDepth;
uniform vec2 uPointer;
uniform float uProgress;
uniform float uTime;
varying vec2 vUv;

void main() {
  // Depth displacement based on pointer
  float depth = texture2D(tDepth, vUv).r;
  vec2 displacedUv = vUv + (uPointer * depth * 0.02);
  vec4 color = texture2D(tMap, displacedUv);

  // Scanline effect
  float scanLine = smoothstep(0.0, 0.05, abs(vUv.y - uProgress));
  vec4 purpleOverlay = vec4(0.55, 0.36, 0.96, 1.0) * (1.0 - scanLine) * 0.4;
  
  // Mix color with a simple brightness/contrast pass
  vec4 finalColor = color + purpleOverlay;
  
  gl_FragColor = vec4(finalColor.rgb, 1.0);
}
`;

const WIDTH = 300;
const HEIGHT = 300;

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();

  const uniforms = useMemo(() => ({
    tMap: { value: rawMap },
    tDepth: { value: depthMap },
    uPointer: { value: new THREE.Vector2(0, 0) },
    uProgress: { value: 0 },
    uTime: { value: 0 }
  }), [rawMap, depthMap]);

  useFrame(({ clock, pointer }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
      materialRef.current.uniforms.uProgress.value = (Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5);
      
      // Smooth pointer interpolation
      materialRef.current.uniforms.uPointer.value.lerp(pointer, 0.1);
    }
  });

  const [w, h] = useAspect(WIDTH, HEIGHT);
  const scaleFactor = 0.40;

  return (
    <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial 
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
      />
    </mesh>
  );
};

export const WebgpuHero = () => {
  const titleWords = 'We Engineer Experiences'.split(' ');
  const subtitle = 'AstraGG is an elite collective of digital architects.';
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [delays, setDelays] = useState<number[]>([]);
  const [subtitleDelay, setSubtitleDelay] = useState(0);

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07));
    setSubtitleDelay(Math.random() * 0.1);
  }, [titleWords.length]);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, titleWords.length]);

  return (
    <div className="h-[90vh] w-full relative">
      <div className="h-[90vh] w-full uppercase items-center absolute z-[60] pointer-events-none px-10 flex justify-center flex-col">
        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-center">
          <div className="flex space-x-2 lg:space-x-6 overflow-hidden text-white flex-wrap justify-center">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={index < visibleWords ? 'fade-in' : 'opacity-0'}
                style={{ animationDelay: `${index * 0.13 + (delays[index] || 0)}s` }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs md:text-xl xl:text-2xl 2xl:text-3xl mt-2 overflow-hidden text-white font-bold text-center">
          <div
            className={subtitleVisible ? 'fade-in-subtitle' : 'opacity-0'}
            style={{ animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s` }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      <button
        className="explore-btn z-[60] pointer-events-auto"
        style={{ animationDelay: '2.2s' }}
        onClick={() => {
            const nextSection = document.getElementById('about-dna');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        }}
      >
        Scroll to explore
        <span className="explore-arrow">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-svg">
            <path d="M11 5V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M6 12L11 17L16 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </button>

      <div className="absolute inset-0 z-0 bg-black">
        <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
          <Scene />
        </Canvas>
      </div>
    </div>
  );
};

export default WebgpuHero;
