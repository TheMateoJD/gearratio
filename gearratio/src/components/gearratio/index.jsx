import data from "./transmisions";
import "./styles/style.css";
import { useEffect, useState } from "react";
import tire from "./tire.png";

export default function GearRatio({
  tcirc,
  setTcirc,
  width,
  setWidth,
  height,
  setHeight,
  size,
  setSize,
  tsize,
  setTsize,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  function tireSize(width, height, size) {
    return (
      Math.floor(
        (((parseInt(width) * parseInt(height)) / 1000) * 2 +
          parseInt(size) * 2.54) *
          100
      ) / 100
    );
  }

  function tireCirc(tsize) {
    return Math.floor(tsize * 3.14 * 100) / 100;
  }

  useEffect(() => {
    setTsize(tireSize(width, height, size));
  }, [height, width, size]);

  useEffect(() => {
    setTcirc(tireCirc(tsize), [tsize]);
  });

  return (
    <section className="tirecontainer">
      <h3>Tire calculations:</h3>
      <p className="tirespec">
        Tire {width}/{height}R{size}
      </p>
      <div className="tiresetup">
        <form onSubmit={handleSubmit}>
          <div className="tireparam">
            <p>Tire width(mm):</p>
            <input
              type="number"
              name="tire width"
              id="tire1"
              step="5"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>
          <div className="tireparam">
            <p>Tire profile(%):</p>
            <input
              type="number"
              name="tire height"
              id="tire2"
              step="5"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="tireparam">
            <p>Tire internal diameter(in):</p>
            <input
              type="number"
              name="tire size"
              id="tire3"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
        </form>
        <div className="calc1">
          {" "}
          Tire External Diameter: <span>{tsize}</span> cm
        </div>
        <div className="calc1">
          {" "}
          Tire Circumference : <span>{tcirc}</span> cm
        </div>
      </div>
      <img src={tire} alt="" height={300} width={300} />
    </section>
  );
}
