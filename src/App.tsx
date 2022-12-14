import React from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import { Home, Marketplace, Auction, Drops, Cart } from "./pages";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/auction" element={<Cart />} />
        <Route path="/drop" element={<Drops />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
