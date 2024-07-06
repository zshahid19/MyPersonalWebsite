"use client";

import { useEffect, useRef } from "react";
import dynamic from 'next/dynamic';

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const loadVanta = async () => {
      const threeScript = document.createElement('script');
      threeScript.src = '/scripts/three.r134.min.js';
      document.head.appendChild(threeScript);

      threeScript.onload = async () => {
        console.log('Three.js loaded');

        const vantaScript = document.createElement('script');
        vantaScript.src = '/scripts/vanta.fog.min.js';
        document.head.appendChild(vantaScript);

        vantaScript.onload = () => {
          console.log('Vanta.js loaded');
          if (window.VANTA && window.VANTA.FOG) {
            vantaEffect.current = window.VANTA.FOG({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              highlightColor: 0xf2b331,
              midtoneColor: 0xe75a7c,
              lowlightColor: 0x3891a6,
              baseColor: 0xffe1c1,
              blurFactor: 0.21,
              speed: 0.60,
              zoom: 2.70,
            });
          } else {
            console.error("Vanta.FOG not available");
          }
        };
      };
    };

    loadVanta();

    const handleResize = () => {
      if (vantaEffect.current) {
        vantaEffect.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={vantaRef} className="vanta-container"></div>;
};

export default dynamic(() => Promise.resolve(VantaBackground), { ssr: false });
