import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";

import './styles/normalize.css';
import './styles/header.css';
import './styles/home.css';
import './styles/menu.css';

const RouteSwitch = () => {
  return (
    <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        </BrowserRouter>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Montserrat:wght@500&display=swap');
        </style>
    </>
  );
};

export default RouteSwitch;