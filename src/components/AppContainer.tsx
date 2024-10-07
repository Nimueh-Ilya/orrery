import AsteroidCard from "./AsteroidCard";
import AsteroidVisual from "./AsteroidVisual";
import { GalaxyOrrery } from "./GalaxyOrrery";

export default function AppContainer() {
  return (
    <>
      <div className="app-container">
        <h1>Wikirocks</h1>
        <GalaxyOrrery></GalaxyOrrery>
        <AsteroidVisual></AsteroidVisual>
        <AsteroidCard></AsteroidCard>
      </div>
    </>
  );
}
