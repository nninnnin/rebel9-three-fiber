import { MeshReflectorMaterial } from "@react-three/drei";

const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial mirror={0} color="#AAAAAA" />
    </mesh>
  );
};

export default Floor;
