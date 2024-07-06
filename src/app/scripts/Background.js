import { useEffect, useRef } from "react";
import Head from "next/head";
import styles from "./page.module.css";

export default function Home() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const loadVanta = async () => {
      if (typeof window !== "undefined") {
        const VANTA = await import("vanta.fog.min");

        if (VANTA && VANTA.default) {
          VANTA.default.FOG({
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
            speed: 0.6,
            zoom: 2.7,
          });
        }
      }
    };

    loadVanta();

    return () => {
      if (vantaRef.current) {
        vantaRef.current.vantaDestroy();
      }
    };
  }, []);

  return (
    <>
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.fog.min.js"></script>
      </Head>
    </>
  );
}
