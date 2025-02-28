import "./styles/entiremath.css";

export default function EntireMath(components) {
  const { diff, tcirc, values, engRPM, units } = components;

  // switching bettwen object and array then making them float numbers instead of strings
  const geararray = Object.values(values);
  let gearArrayFloat = [];
  const temp1 = geararray.map((gear) => {
    gearArrayFloat.push(parseFloat(gear));
  });
  // end of switch

  // setting out random rpm b4 creating function

  function SpeedCalc() {
    let speeds = [];
    const temp2 = gearArrayFloat.map((singlegear) => {
      speeds.push(
        Math.floor(
          (((engRPM / singlegear / diff) * tcirc) / 100000) * 60 * units
        )
      );
    });

    return speeds;
  }

  SpeedCalc();

  const speedvalue = SpeedCalc();

  return (
    <section className="speeds-container">
      <h3>Calculated speeds:</h3>
      <div>
        At <span>{engRPM}</span> rpm
      </div>
      {speedvalue.map((speed, index) => {
        return (
          <div className="speed">
            #{index + 1} gear: <span> {speed} </span>{" "}
            {units === 1 ? "km/h" : "mph"}
          </div>
        );
      })}
    </section>
  );
}
