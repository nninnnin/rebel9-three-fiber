const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[1000 * 1000, 1000 * 1000]} />
      <meshLambertMaterial color="#AAAAAA" />
    </mesh>
  );
};

export default Floor;
