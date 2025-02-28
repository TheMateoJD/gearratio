import { useState } from "react";
import "./styles/transpreset.css";
import ZF8hp45 from "./transpresets/ZF8hp45.js";
import ZFS531 from "./transpresets/ZF-S5-31.js";
import GS6 from "./transpresets/GS6-37BZ.js";

export default function TransPreset({
  isOpen,
  setIsOpen,
  selected,
  setSelected,
  prze2,
  setPrze2,
}) {
  const items = [GS6[0].name, ZFS531[0].name, ZF8hp45[0].name];
  const prze = [GS6[1], ZFS531[1], ZF8hp45[1]];

  return (
    <div className="preset">
      <h3>Transmision: </h3>
      <button onClick={() => setIsOpen(!isOpen)} className="transbtn">
        {selected} ↓
      </button>
      {isOpen && (
        <div className="test">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(item);
                setIsOpen(false);
                setPrze2(prze[index]);
              }}
              className="test2"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
