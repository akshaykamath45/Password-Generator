import "./styles.css";
import { useState } from "react";
import { usePasswordGenerator } from "./customHook/usePasswordGenerator";
export default function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const [copied, setCopied] = useState(false);
  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div className="container">
      {/* Password Text and Copy */}
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <button onClick={handleCopy} className="copyBtn">
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      )}

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

      {/* Error Handling */}
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      {/* Generate Button */}
      <button
        className="generateBtn"
        onClick={() => generatePassword(checkboxData, length)}
      >
        Generate Password
      </button>
    </div>
  );
}
