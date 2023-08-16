import { Image, Text } from "@react-three/drei";
import { PanelInterface } from "./App";

const Panel = ({ panel }: { panel: Omit<PanelInterface, "mediaType"> }) => {
  return (
    <mesh position={panel.position}>
      <meshStandardMaterial />
      <Image url={panel.source} />
      <Text>{panel.id}</Text>
    </mesh>
  );
};

export default Panel;
