import "./App.scss";
import "./App.css";
import Header from "./components/Header";
import SignIn from "./components/Login/SignIn";
import Login from "./components/Login/Login";
import SearchBar from "./components/SearchBar";
import Dashboard from "./components/Dashboard/Dashboard";
import { useEffect } from "react";
import { exChangeRate, statsData } from "./redux/actions/dashboard";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('https://api.ethermine.org/miner/0x33feb9771e261a41b78429e0e1be8c360727e584/currentStats')
    .then(res => res.json())
    .then(res => {
      console.log(res.data)
      dispatch(statsData(res.data))
    })
    
  }, [dispatch])
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=INR')
    .then(res => res.json())
    .then(res => {
        dispatch(exChangeRate('inr',res.ethereum.inr))
    })
  }, [dispatch])
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=USD')
    .then(res => res.json())
    .then(res => {
        dispatch(exChangeRate('usd',res.ethereum.usd))
    })
  }, [dispatch])
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
