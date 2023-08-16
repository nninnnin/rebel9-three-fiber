import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Image } from "@react-three/drei";

import LosCar from "./assets/images/los-car.jpeg";
import { CameraControls } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";

interface PanelInterface {
  mediaType: "image" | "color" | "video";
  source: string;
  position: Array<number>;
}

const panels: Array<PanelInterface> = [
  {
    mediaType: "color",
    source: "rgba(25, 250, 100, 0.89)",
    position: [0, 0, 0],
  },
  {
    mediaType: "image",
    source: LosCar,
    position: [0, 0, 0],
  },
  {
    mediaType: "video",
    source: "rgba(25, 250, 100, 0.89)",
    position: [0, 0, 0],
  },
];

function App() {
  return (
    <div id="canvas-container">
      <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
        <PerspectiveCamera
          makeDefault
          position={[0, 1, 10] as [number, number, number]}
          fov={30}
          near={0.1}
          far={100}
        />
        <CameraControls />

        <color attach="background" args={["#fff"]} />

        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial mirror={0} color="#AAAAAA" />
        </mesh>

        <mesh position={[0, 0.5, 0]}>
          <meshStandardMaterial />
          <Image url={panels[1].source} />
        </mesh>
      </Canvas>
    </div>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(<App />);

export default App;
