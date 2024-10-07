import { useEffect, useRef } from "react";
import * as Spacekit from "spacekit.js";

export default function AsteroidVisual() {
  const containerRef = useRef(null);

  useEffect(() => {
    const viz = new Spacekit.Simulation(
      document.getElementById("asteroid-visual"),
      {
        basePath: "./node_modules/spacekit.js/src",
      }
    );

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
