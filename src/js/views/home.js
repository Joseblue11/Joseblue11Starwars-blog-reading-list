import React from "react";
import "../../styles/home.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import { Card } from "./Cards";

export const Home = () => {
  const [planets, setPlanets] = useState({});

  const getplanets = () => {
    fetch("https://www.swapi.tech/api/planets/")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getplanets();
  }, []);

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
      <h1 className="text-danger">Planets</h1>
      <div className="my-carrusel">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  );
};
