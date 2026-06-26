import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout";

import Home from "./pages/Home";
import Signup from "./components/signup";
import Login from "./components/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages with Navbar + Footer */}
        <Route
          path="/"
          element={
              <Home />
          }
        />

        {/* Auth Pages without Layout */}
        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
