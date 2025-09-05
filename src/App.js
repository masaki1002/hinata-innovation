import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navigation";
import MorePosts from "./components/MorePosts";
import Navigation from "./components/Navigation";


function App() {
  return (
   
      <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/moreposts" element={<MorePosts />}></Route>
      </Routes>
      </Router>       
  
  );
}

export default App;
