import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";

import { MeshReflectorMaterial } from "@react-three/drei";

function App() {
  return (
    <div id="canvas-container">
      <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
        {/* 배경 */}
        <color attach="background" args={["#fff"]} />

        {/* 바닥 */}
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial mirror={0} color="#AAAAAA" />
        </mesh>
      </Canvas>
    </div>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(<App />);

export default App;
