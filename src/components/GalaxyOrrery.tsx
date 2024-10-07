import { useEffect, useRef } from "react";
import * as Spacekit from "spacekit.js";

export const GalaxyOrrery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const viz = new Spacekit.Simulation(
      document.getElementById("galaxy-container"),
      {
        basePath: "./node_modules/spacekit.js/src",
      }
    );

    viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);
    viz.createObject("sun", Spacekit.SpaceObjectPresets.SUN);
    viz.createObject("mercury", Spacekit.SpaceObjectPresets.MERCURY);
    viz.createObject("venus", Spacekit.SpaceObjectPresets.VENUS);
    viz.createObject("earth", Spacekit.SpaceObjectPresets.EARTH);
    viz.createObject("mars", Spacekit.SpaceObjectPresets.MARS);
    viz.createObject("jupiter", Spacekit.SpaceObjectPresets.JUPITER);
    viz.createObject("saturn", Spacekit.SpaceObjectPresets.SATURN);
    viz.createObject("uranus", Spacekit.SpaceObjectPresets.URANUS);
    viz.createObject("neptune", Spacekit.SpaceObjectPresets.NEPTUNE);
  }, []);

  return (
    <>
      <div
        id="galaxy-container"
        ref={containerRef}
        style={{ width: "100%", height: "100%" }}
      />
    </>
  );
};
