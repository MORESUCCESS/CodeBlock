import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout";
import AdminLayout from "./admin/components/adminLayout";

// public pages
import Home from "./pages/home";
import Resources from "./pages/resources";
import Categories from "./pages/categories";
import About from "./pages/about";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";

// auth
import Login from "./components/login";
import Signup from "./components/signUp";

// admin
import Dashboard from "./admin/pages/dashboard";
import Products from "./admin/pages/products";
import Orders from "./admin/pages/orders";
import Users from "./admin/pages/users";
import Settings from "./admin/pages/settings";
import { useEffect } from "react";

const App = () => {
  return (
    <Routes>
      {/* AUTH */}

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      {/* ADMIN */}

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="resources" element={<Products />} />

        <Route path="orders" element={<Orders />} />

        <Route path="users" element={<Users />} />

        <Route path="settings" element={<Settings />} />
      </Route>

      {/* WEBSITE */}

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/resources" element={<Resources />} />

        <Route path="/categories" element={<Categories />} />

        <Route path="/about" element={<About />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
