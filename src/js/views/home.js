import React from "react";
import "../../styles/home.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import { Card } from "./Cards";
import Planets from "./Planets";

export const Home = () => {
  return (
    <div className="home container">
      <h1 className="text-danger">Characters</h1>
      <div className="my-carrusel">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <br />
      <h1 className="text-danger">Films</h1>
      <div className="my-carrusel">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <h1 className="text-danger">Species</h1>
      <div className="my-carrusel">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <h1 className="text-danger">Startships</h1>
      <div className="my-carrusel">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <h1 className="text-danger">Vehicles</h1>
      <div className="my-carrusel">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Planets />
    </div>
  );
};
