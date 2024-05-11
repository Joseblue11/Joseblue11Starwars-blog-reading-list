import React from "react";
import "../../styles/home.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import { CardPlanets } from "./CardPlanets";
import Planets from "./Planets";
import Characters from "./Characters";

export const Home = () => {
  return (
    <div className="home container">
      <Characters />
      <Planets />
    </div>
  );
};

