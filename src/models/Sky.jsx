import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

import skyScene from "../assets/3d/sky.glb";
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating }) => {
  const ref = useRef();
  const sky = useGLTF(skyScene);

  useFrame((_, delta) => {
    if (isRotating) {
      ref.current.rotation.y += 0.2 * delta;
    }
  });

  return (
    <mesh ref={ref}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
