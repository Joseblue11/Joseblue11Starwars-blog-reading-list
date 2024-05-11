import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { CardPlanets } from "./CardPlanets";

const Planets = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getPlanets();
  }, []);

  return (
    <div>
      <h1 className="text-danger">Planets</h1>
      <div className="my-carrusel">
        {store.planets.map((items, index) => (
          <CardPlanets items={items} id={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Planets;
