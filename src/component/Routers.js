import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { ShopCars } from "./ShopCars";
import { ShowDetails } from "./ShowDetails";
export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<ShowDetails />} />
        <Route path="/shop" element={<ShowDetails />} />
      </Routes>
    </>
  );
};
