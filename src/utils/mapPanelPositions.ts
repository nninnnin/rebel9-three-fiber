import { Vector3 } from "@react-three/fiber";
import { PanelInterface } from "../components/App";

export default function mapPanelPositions(
  panels: Array<PanelInterface>,
  position: {
    x: { start: number; gap: number };
    y: { start: number; gap: number };
    z: { start: number; gap: number };
  }
): Array<PanelInterface & { position: Vector3 }> {
  return panels.map((panel, index) => ({
    ...panel,
    position: [
      position.x.start + position.x.gap * index,
      position.y.start + position.y.gap * index,
      position.z.start + position.z.gap * index,
    ] as Vector3,
  }));
}
