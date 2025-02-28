import "./styles/cruise.css";

export default function Cruise({
  cruise,
  setCruise,
  units,
  lastgear,
  tcirc,
  diff,
}) {
  const handleChange = (e) => {
    setCruise(e.target.value);
  };

  function RpmCalc() {
    const crspeed =
      ((cruise * 100000) / (tcirc * 60)) * ((Number(lastgear) * diff) / units);
    return crspeed;
  }
  RpmCalc();

  return (
    <section className="cruise">
      <h3>Engine RPM at set cruise speed:</h3>
      <div className="cruise-container">
        <div className="differential">
          <p>{units === 1 ? "km/h" : "mph"}</p>
          <input
            type="number"
            step="1"
            value={cruise}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <span>{Math.floor(RpmCalc())}</span> RPM
        </div>
      </div>
    </section>
  );
}
