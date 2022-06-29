import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import About from './Components/About';
import Users from './Components/Users';
import Footer from './Components/Footer';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<Users />} />
          </Routes>
          <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    )
  }
}
