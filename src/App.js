import "./styles.css";
import { useState } from "react";
export default function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false }
  ]);

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };
  return (
    <div className="container">
      {/* Password Text and Copy */}
      <div className="header">
        <div className="title">r2139j4e1nk</div>
        <button onClick={() => {}} className="copyBtn">
          Copy
        </button>
      </div>
      {/* Character Length */}
      <div className="charLength">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4 "
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      {/* Checkboxes */}
      <div className="checkboxes">
        {checkboxData.map((checkbox, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                checked={checkbox.state}
                onChange={() => handleCheckboxChange(index)}
              />
              <label>{checkbox.title}</label>
            </div>
          );
        })}
      </div>
      {/* Strength */}
      {/* Generate Button */}
      <button className="generateBtn" onClick={() => {}}>
        Generate Password
      </button>
    </div>
  );
}
