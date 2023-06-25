import "./styles.css";

export default function App() {
  const checkboxData = [
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ];

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
          <label>4</label>
        </span>
        <input
          type="range"
          min="4 "
          max="20"
          //  value={}
          //  onChange={}
        />
      </div>
      {/* Checkboxes */}
      <div className="checkboxes">
        {checkboxData.map((checkbox, index) => {
          return (
            <div key={index}>
              <input type="checkbox" checked={checkbox.state} />
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
