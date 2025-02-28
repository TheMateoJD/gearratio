import "./styles/trans.css";

export default function TransCalc({ values, setValues }) {
  const handleChange = (key, newValue) => {
    setValues((prev) => ({
      ...prev,
      [key]: newValue,
    }));
  };

  return (
    <section className="allratios">
      {Object.entries(values).map(([key, value]) => (
        <div key={key} className="oneratio">
          <label>#{key} ratio: </label>
          <input
            step=".01"
            type="number"
            value={value}
            onChange={(e) => handleChange(key, e.target.value)}
          />
        </div>
      ))}
    </section>
  );
}
