import { Image, useVideoTexture } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";
import { PanelInterface } from "./App";

const Panel = ({
  panel,
}: {
  panel: PanelInterface & { position: Vector3 };
}) => {
  const isVideo = panel.mediaType === "video";
  const isImage = panel.mediaType === "image";
  const isColor = panel.mediaType === "color";

  let videoTexture;
  if (isVideo) {
    videoTexture = useVideoTexture(panel.source);
  }

  return (
    <mesh position={panel.position}>
      {isVideo && (
        <>
          <planeGeometry />
          <meshBasicMaterial map={videoTexture} toneMapped={false} />
        </>
      )}
      {isColor && (
        <>
          <planeGeometry />
          <meshBasicMaterial color={panel.source} />
        </>
      )}
      {isImage && <Image url={panel.source} />}
    </mesh>
  );
};

export default Panel;
