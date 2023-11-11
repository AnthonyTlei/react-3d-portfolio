import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import birdScene from "../assets/3d/bird.glb";

const Bird = () => {
  const ref = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, ref);

  useFrame(({ clock, camera }) => {
    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (ref.current.position.x > camera.position.x + 10) {
      ref.current.rotation.y = Math.PI;
    } else if (ref.current.position.x < camera.position.x - 10) {
      ref.current.rotation.y = 0;
    }

    if (ref.current.rotation.y === 0) {
      ref.current.position.x += 0.01;
      ref.current.position.z -= 0.01;
    } else {
      ref.current.position.x -= 0.01;
      ref.current.position.z += 0.01;
    }
  });

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  return (
    <mesh ref={ref} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
