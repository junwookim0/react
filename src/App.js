import "./App.css";
import ListClass from "./components/ListClass";
import ListFunction from "./components/ListFunction";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListClass />
      </header>
      <header className="App-header2">
        <ListFunction />
      </header>
    </div>
  );
}

export default App;
