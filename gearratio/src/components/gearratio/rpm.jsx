import "./styles/rpm.css";

export default function EngineRPM({ engRPM, setEngRPM }) {
  const handleChange = (e) => {
    setEngRPM(e.target.value);
  };

  return (
    <div className="differential">
      <p>Engine RPM:</p>
      <input
        type="number"
        step="50"
        value={engRPM}
        onChange={handleChange}
      ></input>
    </div>
  );
}
