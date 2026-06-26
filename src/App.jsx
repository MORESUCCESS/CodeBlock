import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Layout from "./components/layout";

// Pages
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ResourceDetails from "./pages/ResourceDetails";
import Checkout from "./pages/Checkout";

// Auth (No Layout)
import Signup from "./components/signup";
import Login from "./components/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Website */}

        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/resources"
          element={
            <Layout>
              <Resources />
            </Layout>
          }
        />

        <Route
          path="/resources/:id"
          element={
            <Layout>
              <ResourceDetails />
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

        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />

        <Route
          path="/checkout"
          element={
            <Layout>
              <Checkout />
            </Layout>
          }
        />

        {/* Authentication Pages */}

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
