import { useEffect, useState } from "react";

export default function AsteroidCard() {
  const [planetData, setPlanetData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState({
    sigma_tp: 0.00036206,
    diameter: "",
    sigma_q: 6.4239e-8,
    epoch_mjd: 58600,
    ad: 2.70004293303704,
    producer: "Otto Matic",
    rms: 0.58643,
    H_sigma: "",
    closeness: 3971.96461464883,
    spec_B: "D",
    K2: "",
    K1: "",
    M1: "",
    two_body: "",
    full_name: "(2002 AT4)",
    M2: "",
    sigma_per: 0.000049808,
    equinox: "J2000",
    DT: "",
    diameter_sigma: "",
    saved: -5097173901.92169,
    albedo: "",
    moid_ld: 16.729367541,
    pha: "Y",
    neo: "Y",
    sigma_ad: 9.6222e-8,
    PC: "",
    profit: 334.492751851553,
    est_diameter: 0.197460099452781,
    sigma_w: 0.000083343,
    sigma_i: 0.0000067735,
    per: 931.763080169529,
    id: "bK02A04T",
    A1: "",
    data_arc: 1805,
    A3: "",
    score: 3.19877437034626e-9,
    per_y: 2.55102828246278,
    sigma_n: 2.0653e-8,
    epoch_cal: 20190427,
    orbit_id: 10,
    sigma_a: 6.6533e-8,
    sigma_om: 0.00008055,
    A2: "",
    sigma_e: 3.908e-8,
    condition_code: 0,
    rot_per: "",
    prov_des: "2002 AT4",
    G: "",
    last_obs: "2006-11-27",
    H: 21.2,
    price: 1599.38718517313,
    IR: "",
    spec_T: "",
    epoch: 2458600.5,
    n_obs_used: 201,
    moid: 0.0429873,
    extent: "",
    dv: 5.557219,
    e: 0.44621420307698,
    GM: "",
    tp_cal: 20200109.8101341,
    pdes: "2002 AT4",
    class: "AMO",
    UB: "",
    a: 1.8669730440293,
    t_jup: 3.859,
    om: 323.475043040245,
    ma: 260.391365285981,
    name: "",
    i: 1.49973983161097,
    tp: 2458858.31013415,
    prefix: "",
    BV: "",
    spec: "D",
    q: 1.03390315502156,
    w: 203.060094366162,
    moid_jup: 2.28028,
    n: 0.386364310479548,
    sigma_ma: 0.00013457,
    first_obs: "2001-12-18",
    n_del_obs_used: "",
    spkid: 3102743,
    n_dop_obs_used: "",
  });
  const onOptionChangeHandler = (event) => {
    const selectedBody = planetData.filter((planet) => {
      return planet.full_name == event.target.value;
    });
    setData(selectedBody[0]);
  };
  async function getPlanet() {
    return fetch(
      `https://www.asterank.com/api/asterank?query=%7B%22price%22:%7B%22$gt%22:1%7D%7D&limit=100`
    ).then((response) => response.json());
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const Adata = await getPlanet();
        setPlanetData(Adata);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchData();
    console.log(data);
  }, []);
  const planetNames = planetData.map((planetObject: object) => {
    return planetObject.full_name;
  });

  return (
    <>
      <div className="asteroid-card">
        <div>
          <p>Asteroid Name:</p>
          <p>{data.full_name}</p>
        </div>
        <div>
          <p>Diameter:</p>
          <p>{data.est_diameter ? data.est_diameter : data.diameter}</p>
        </div>
        <div>
          <p>Price:</p>
          <p>{data.price}</p>
        </div>
        <div>
          <p>Distance to earth: </p>
          <p>{data.moid}</p>
        </div>
        <div>
          <p>Accessibility:</p>
          <p>{data.closeness}</p>
        </div>
        <div>
          <p>Potentially hazardeous:</p>
          <p>{data.pha === "Y" ? "yes" : "no"}</p>
        </div>
        <div>
          <p>Near Earth Object:</p>
          <p>{data.neo === "Y" ? "yes" : "no"}</p>
        </div>
        <div>
          <p>Mining potential:</p>
          <p>{data.score}</p>
        </div>
        <div>
          <p>First Observation:</p>
          <p>{data.first_obs}</p>
        </div>
      </div>
      <select name="" id="" onChange={onOptionChangeHandler}>
        <option value={"96 Aegle"}>Please choose a body</option>
        {planetNames.map((planetName, index) => {
          return <option key={index}>{planetName}</option>;
        })}
      </select>
      <div className="discovery">
        <p>{data.full_name}</p>
        <p>
          <strong>First Discovered:</strong> {data.first_obs}
        </p>
        <p>
          <strong>Last Seen:</strong> {data.last_obs}
        </p>
      </div>
    </>
  );
}
