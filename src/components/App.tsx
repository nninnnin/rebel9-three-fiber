import { createRoot } from "react-dom/client";
import { Canvas, Vector3 } from "@react-three/fiber";
import { PerspectiveCamera, Image, MapControls } from "@react-three/drei";

import LosCar from "../assets/images/los-car.jpeg";
import Panel from "./Panel";
import Floor from "./Floor";

export interface PanelInterface {
  id: number;
  mediaType: "image" | "color" | "video";
  source: string;
  position: Vector3;
}

const panelsLeft: Array<PanelInterface> = [
  {
    id: 1,
    mediaType: "image",
    source: LosCar,
    position: [-0.8, 0, -0.6],
  },
  {
    id: 2,
    mediaType: "image",
    source: LosCar,
    position: [-1.4, 0, 0.6],
  },
  {
    id: 2,
    mediaType: "image",
    source: LosCar,
    position: [-2.0, 0, 1.6],
  },
];

const panelsRight: Array<PanelInterface> = [
  {
    id: 4,
    mediaType: "image",
    source: LosCar,
    position: [0.8, 0, -0.6],
  },
  {
    id: 5,
    mediaType: "image",
    source: LosCar,
    position: [1.4, 0, 0.6],
  },
  {
    id: 6,
    mediaType: "image",
    source: LosCar,
    position: [2.0, 0, 1.6],
  },
];

function App() {
  return (
    <div id="canvas-container">
      <Canvas dpr={[1, 1.5]}>
        <PerspectiveCamera
          makeDefault
          position={[0, 6, 10] as [number, number, number]}
          fov={40}
          near={0.1}
          far={100}
        />
        <MapControls />

        <color attach="background" args={["#fff"]} />
        <Floor />

        {panelsLeft.map((panel) => {
          return <Panel panel={panel} />;
        })}

        {panelsRight.map((panel) => {
          return <Panel panel={panel} />;
        })}
      </Canvas>
    </div>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(<App />);

export default App;
