import { createRoot } from "react-dom/client";
import { Canvas, Vector3 } from "@react-three/fiber";
import { PerspectiveCamera, MapControls, SpotLight } from "@react-three/drei";

import Panel from "./Panel";
import Floor from "./Floor";
import mapPanelPositions from "../utils/mapPanelPositions";
import LosCar from "../assets/images/los-car.jpeg";
import WorkBunnyBye from "../assets/images/work-bye-bunny.jpg";
import Noeul from "../assets/images/noeul.jpg";
import IBMVideo from "../assets/videos/ibm.mp4";
import MSVideo from "../assets/videos/ms.mp4";

export interface PanelInterface {
  id: number;
  mediaType: "image" | "color" | "video" | "youtube";
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
    mediaType: "video",
    source: IBMVideo,
  },
  {
    id: 3,
    mediaType: "image",
    source: WorkBunnyBye,
  },
  {
    id: 4,
    mediaType: "color",
    source: "violet",
  },
  {
    id: 5,
    mediaType: "image",
    source: Noeul,
  },
  {
    id: 6,
    mediaType: "video",
    source: MSVideo,
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
