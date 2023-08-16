import { createRoot } from "react-dom/client";
import { Canvas, Vector3 } from "@react-three/fiber";
import { PerspectiveCamera, MapControls, SpotLight } from "@react-three/drei";

import LosCar from "../assets/images/los-car.jpeg";
import Panel from "./Panel";
import Floor from "./Floor";
import mapPanelPositions from "../utils/mapPanelPositions";

export interface PanelInterface {
  id: number;
  mediaType: "image" | "color" | "video";
  source: string;
}

const panels: Array<PanelInterface> = [
  {
    id: 1,
    mediaType: "image",
    source: LosCar,
  },
  {
    id: 2,
    mediaType: "image",
    source: LosCar,
  },
  {
    id: 3,
    mediaType: "image",
    source: LosCar,
  },
  {
    id: 4,
    mediaType: "image",
    source: LosCar,
  },
  {
    id: 5,
    mediaType: "image",
    source: LosCar,
  },
  {
    id: 6,
    mediaType: "image",
    source: LosCar,
  },
];

const panelsLeft: Array<PanelInterface & { position: Vector3 }> =
  mapPanelPositions(panels.slice(0, 3), {
    x: { start: -2, gap: -0.05 },
    y: { start: 0, gap: 0 },
    z: { start: -4, gap: 3.5 },
  });

const panelsRight: Array<PanelInterface & { position: Vector3 }> =
  mapPanelPositions(panels.slice(3, 6), {
    x: { start: 2, gap: 0.05 },
    y: { start: 0, gap: 0 },
    z: { start: -4, gap: 3.5 },
  });

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 10] as [number, number, number]}
          fov={40}
          near={0.1}
          far={100}
        />
        <MapControls enablePan={false} />

        <ambientLight intensity={1.5} />
        <SpotLight
          color="#fff"
          position={[0, 5, 10]}
          distance={1000}
          intensity={1000}
          penumbra={1}
        />
        <Floor />

        {panelsLeft.map((panel) => {
          return <Panel key={panel.id} panel={panel} />;
        })}

        {panelsRight.map((panel) => {
          return <Panel key={panel.id} panel={panel} />;
        })}
      </Canvas>
    </div>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(<App />);

export default App;
