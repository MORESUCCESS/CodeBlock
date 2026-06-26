import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout";

import Home from "./pages/Home";
import Signup from "./components/signup";
import Login from "./components/login";
import Resources from "./pages/resources";
import Categories from "./pages/categories";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages with Navbar + Footer */}
        <Route path="/" element={<Home />} />

        <Route
          path="/resources"
          element={
            <Layout>
              <Resources />
            </Layout>
          }
        />

        <Route
          path="/categories"
          element={
            <Layout>
              <Categories />
            </Layout>
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
