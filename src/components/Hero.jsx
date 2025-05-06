import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MdOutlineCompareArrows } from "react-icons/md";
import Texture from "./Texture";
import "../styles/Hero.css";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import gsap from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = (prop) => {
  const tapeRef = useRef();
  const arrowRef = useRef();
  const containerRef = useRef();
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const handleScroll = (evt) => {
      if (evt.deltaY > 0) {
        setDirection("right");
      } else {
        setDirection("left");
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  useEffect(() => {
    const xDirection = direction === "right" ? "180%" : "-180%";
  
    gsap.to(tapeRef.current, {
      x: xDirection,
      duration: 700,
      repeat: -1,
      ease: "none",
    });
  }, [direction]);
  useEffect(()=>{
    const arrowRotation = direction === "right" ? 0 : 180;
    gsap.to(arrowRef.current, {
      rotateZ: arrowRotation,
      opacity:0,
      duration: 0.5,
      ease: "power2.out",
    });
  },[direction])

  gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);
  
    useGSAP(() => {
      gsap.from(".social-buttons", {
        opacity: 0,
        y: 100,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#hero",
          start: "top 45%",
          toggleActions: "play none none none",
        },
      });
    },{ scope: containerRef });

  const rools = [
    "Frontend Developer",
    "Backend Developer",
    "Full-Stack Developer",
    "Database Manager",
    "UI/UX Designer",
    "Software Engineer",
    "Web Designer",
    "React Developer",
    "Node.js Developer",
    "MERN-Stack Developer",
    "JavaScript Developer",
    "API Integrator",
    "Technical Writer",
  ];
  

  return (
    <div className="herosection" id="hero" ref={containerRef} >
      {/* <div className="canvas">
        <Canvas
          shadows
          gl={{
            powerPreference: "high-performance",
            antialias: true,
            preserveDrawingBuffer: true,
          }}
          camera={{ position: [0, 0, 5], fov: 18 }}
        >
          <ambientLight intensity={1} />
          <directionalLight
            castShadow
            position={[5, 5, 5]}
            intensity={2}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <OrbitControls enableZoom enableRotate enablePan />
          <EffectComposer>
            <Bloom
              mipmapBlur
              luminanceThreshold={0}
              luminanceSmoothing={0.9}
              intensity={1.5}
            />
          </EffectComposer>
          <Texture />
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.6, 0]}
          >
            <planeGeometry args={[10, 10]} />
            <shadowMaterial opacity={0.9} />
          </mesh>
        </Canvas>
      </div> */}

      <div className="rools-loop">
        <div className="tape" ref={tapeRef}>
          {Array(10)
            .fill(rools)
            .flat()
            .map((skill, index) => (
              <div className="words" key={index + Math.random()}>
                <h2 className="skill-h2">{skill}</h2>
                <span className="skill-icon" ref={arrowRef}>
                  <MdOutlineCompareArrows />
                </span>
              </div>
            ))}
        </div>
      </div>

      <div className="caption">
        <p className="caption-p">Get Connected through...!</p>
      </div>

      <div className="social-buttons">
        <a
          href={prop.socialMedia.github}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn github-btn"
        >
          <FaGithub />
          GitHub
        </a>
        <a
          href={prop.socialMedia.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn linkedin-btn"
        >
          <FaLinkedin />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Hero;
