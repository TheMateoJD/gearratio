export default function DiffCalc({ diff, setDiff }) {
  const handleChange = (e) => {
    setDiff(e.target.value);
  };

  return (
    <div className="differential">
      <p>Differential ratio:</p>
      <input
        type="number"
        step="0.01"
        value={diff}
        onChange={handleChange}
      ></input>
    </div>
  );
}
