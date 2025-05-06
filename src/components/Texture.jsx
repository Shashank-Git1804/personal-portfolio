import { useTexture} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Texture() {
  const tex = useTexture("/background/backdrop.png");
  const meshRef = useRef();
  const { viewport } = useThree();
  const scale = Math.min(viewport.width / 3, 1);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh castShadow receiveShadow scale={[scale, scale, scale]} ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
      <meshStandardMaterial map={tex} side={THREE.DoubleSide} transparent opacity={0.9}/>
    </mesh>
  );
}
