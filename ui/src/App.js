import Home from "./Components/Home";
import Footer from "./Components/Footer";
import AssetView from "./views/AssetView";
import Approver from "./Components/Approver";
import LoginPage from "./Components/LoginPage";
import Requests from "./Components/Requests";
import ShoppingCart from "./Components/ShoppingCart";
import SME from "./Components/SME";
import FAQ from "./Components/FAQ";
import Admin from "./Components/Admin";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Context from "./Context";
import './App.css';
import Map from "./Components/Map";

function App() {
  const [authentication, setAuthentication] = useState([]);

  return (
    <div className="App">
      <Context.Provider value={{ authentication, setAuthentication }}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/ShoppingCart" element={<ShoppingCart />} />
            <Route path="/Approver" element={<Approver />} />
            <Route path="/Assets/:id" element={<AssetView />} />
            <Route path="/Requests" element={<Requests />} />
            <Route path="/SME" element={<SME />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/map" element={<Map />} />
          </Routes>
          <Footer />
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
