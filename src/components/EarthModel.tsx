import { useEffect, useRef } from "react";
import * as Spacekit from "spacekit.js";

export const EarthModel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const viz = new Spacekit.Simulation(
      document.getElementById("main-container"),
      {
        basePath: "./node_modules/spacekit.js/src",
      }
    );

    viz.createStars();

    const earth = viz.createSphere("earth", {
      textureUrl: "/src/assets/earth/eso_earth.jpg",
      radius: 1 / 10,
      debug: {
        showAxes: false,
      },
    });
    const moon = viz.createObject("moon", {
      textureUrl: "/src/assets/earth/eso_earth.jpg",
      radius: 58232.503 / 149598000,
      ephem: new Spacekit.Ephem(
        {
          a: 0.3,
          e: 0.5,
          i: 52,
          om: 3.170946964325638e2,
          w: 1.774865822248395e2,
          ma: 1.764302192487955e2,
          epoch: 2458426.5,
        },
        "deg"
      ),
      debug: {
        showAxes: false,
      },
    });
    moon.orbitAround(earth);
  }, []);

  return (
    <>
      <div
        id="main-container"
        ref={containerRef}
        style={{ width: "100vh", height: "100vh" }}
      />
    </>
  );
};
