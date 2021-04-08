import "./App.scss";
import "./App.css";
import Header from "./components/Header";
import SignIn from "./components/Login/SignIn";
import Login from "./components/Login/Login";
import SearchBar from "./components/SearchBar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
    return (
    <div className="App">
      <Header />
      <SignIn />
      <Login />
      <SearchBar />
      <Dashboard />
    </div>
  );
}

export default App;
