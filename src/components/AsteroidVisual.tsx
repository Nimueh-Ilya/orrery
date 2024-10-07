import { useEffect, useRef } from "react";
import * as Spacekit from "spacekit.js";

export default function AsteroidVisual() {
  const containerRef = useRef(null);

  useEffect(() => {
    const canvasElement = document.getElementById(
      "asteroid-visual"
    ) as HTMLCanvasElement;

    const viz = new Spacekit.Simulation(canvasElement, {
      basePath: "./node_modules/spacekit.js/src",
    });

    viz.createStars();
    viz.createSphere("asteroid", {
      textureUrl: "/src/assets/asteroids/Generic_Celestia_asteroid_texture.jpg",
      rotation: {
        lambdaDeg: 251,
        betaDeg: -63,
        period: 3.755067,
        yorp: 1.9e-8,
        phi0: 0,
        jd0: 2443568.0,
      },
    });
  }, []);

  return (
    <>
      <div id="asteroid-visual" ref={containerRef} />
    </>
  );
}
