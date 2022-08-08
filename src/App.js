import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './Home';
import CreateBLog from './CreateBLog';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/createblog" element={<CreateBLog />} />
      </Routes>
    </Router>
  );
}

export default App;
