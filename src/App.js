import "./App.scss";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
    return (
    <div className="App">
      <SearchBar />
      <Dashboard />
    </div>
  );
}

export default App;
