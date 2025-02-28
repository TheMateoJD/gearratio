import "./styles/units.css";

export default function Units({ units, setUnits }) {
  return (
    <div className="units-container">
      <h3>Select units:</h3>
      <div className="kmhormph">
        <div className={units === 1 ? "checked" : "unchecked"}>
          <input
            type="radio"
            id="kmhChoice"
            name="units"
            value="1"
            checked={units === 1}
            onChange={(e) => setUnits(Number(e.target.value))}
          />
          <label htmlFor="kmhChoice">km/h</label>
        </div>
        <div className={units === 0.621 ? "checked" : "unchecked"}>
          <input
            type="radio"
            id="mphChoice"
            name="units"
            value="0.621"
            checked={units === 0.621}
            onChange={(e) => setUnits(Number(e.target.value))}
          />
          <label htmlFor="mphChoice">mph</label>
        </div>
      </div>
    </div>
  );
}
