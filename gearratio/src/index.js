import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import GearRatio from "./components/gearratio";
import TransCalc from "./components/gearratio/trans";
import DiffCalc from "./components/gearratio/diff";
import EngineRPM from "./components/gearratio/rpm";
import Units from "./components/gearratio/units";
import EntireMath from "./components/gearratio/entiremath";
import TransPreset from "./components/gearratio/transpreset";
import Cruise from "./components/gearratio/cruise";
import GS6 from "./components/gearratio/transpresets/GS6-37BZ";
import "./index.css";

function Greeting() {
  const [width, setWidth] = useState(245);
  const [height, setHeight] = useState(45);
  const [size, setSize] = useState(17);
  const [tsize, setTsize] = useState(65.23);
  const [diff, setDiff] = useState(2.93);
  // const [values, setValues] = useState(GS6[1]);
  const transname = GS6[0].name;
  const [tcirc, setTcirc] = useState(204.82);
  const [engRPM, setEngRPM] = useState(3000);
  const [units, setUnits] = useState(1);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(GS6[0].name);
  const [prze2, setPrze2] = useState(GS6[1]);
  const [cruise, setCruise] = useState(100);

  let lastgear = prze2[Object.keys(prze2)[Object.keys(prze2).length - 1]];

  return (
    <div className="App ">
      <div className="tire onecol">
        <GearRatio
          tcirc={tcirc}
          setTcirc={setTcirc}
          width={width}
          setWidth={setWidth}
          height={height}
          setHeight={setHeight}
          size={size}
          setSize={setSize}
          tsize={tsize}
          setTsize={setTsize}
        />
      </div>
      <div className="transmision onecol">
        <div className="name-ratios">
          <TransPreset
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selected={selected}
            setSelected={setSelected}
            prze2={prze2}
            setPrze2={setPrze2}
          />
          <TransCalc
            values={prze2}
            setValues={setPrze2}
            transname={transname}
          />
        </div>
      </div>
      <div className="results onecol">
        <div className="addinfo">
          <h3>Additional parameters</h3>
          <div className="diffandrpm">
            <DiffCalc diff={diff} setDiff={setDiff} />

            <EngineRPM engRPM={engRPM} setEngRPM={setEngRPM} />
          </div>
        </div>
        <Units units={units} setUnits={setUnits} />

        <EntireMath
          tcirc={tcirc}
          values={prze2}
          diff={diff}
          engRPM={engRPM}
          units={units}
        />
        <Cruise
          cruise={cruise}
          setCruise={setCruise}
          units={units}
          lastgear={lastgear}
          tcirc={tcirc}
          diff={diff}
        />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting></Greeting>);

// import Accordian from "./components/accordian";
// import Randomcolor from "./components/randomcolor";
// import Starrating from "./components/starrating";
// import Imgslider from "./components/imgslider";
// import LoadMore from "./components/loadmore";

/* <Accordian />
      <Randomcolor />
      <Starrating noOfStars={10} /> */ //{" "}
// <Imgslider url={`https://picsum.photos/v2/list`} limit={10} />
// <LoadMore /> unfinished

// disclaimer all values are caluculated from formulas in perfect conditions,
//  the actual results may vary depending on parts wear,
// wind resistance, tire preasure, horsepower limitations ect
