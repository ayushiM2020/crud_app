import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="information">
        <label> Name: </label>
        <input type="text" />
        <label> Age: </label>
        <input type="number" />
        <label> Location: </label>
        <input type="text" />
        <label> Position: </label>
        <input type="text" />
        <label> Annual Salary: </label>
        <input type="number" />
        <button>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
