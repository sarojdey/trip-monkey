import "./App.css";
import CheckboxLabels from "./CheckboxLabels";

function App() {
  return (
    <>
      <div className="application">
        <div className="header">
          <img className="monkey" src="src\assets\logo.jpg" alt="monkey"></img>
        </div>
        <div className="content">
          <div className="form">
            <p>What do you need for your trip?</p>
            <input type="text" placeholder="Quantity" />
            <input type="text" placeholder="Item name" />
            <button>Add</button>
          </div>
          <div className="list">
            <CheckboxLabels />
          </div>
        </div>
        <div className="footer">
          <p>Get packing!!</p>
        </div>
      </div>
    </>
  );
}

export default App;
