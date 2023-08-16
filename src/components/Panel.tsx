import { Image, Text } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";
import { PanelInterface } from "./App";

const Panel = ({
  panel,
}: {
  panel: PanelInterface & { position: Vector3 };
}) => {
  return (
    <mesh position={panel.position}>
      <meshStandardMaterial />
      <Image url={panel.source} />
      <Text>{panel.id}</Text>
    </mesh>
  );
};

export default Panel;
