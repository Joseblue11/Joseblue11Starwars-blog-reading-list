import React from "react";
import "../../styles/home.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Planets from "./Planets";
import Characters from "./Characters";

export const Home = () => {
  return (
    <div className="home">
      <div className="Container-fluid justify-contect-center">
        <Characters />
        <br />
        <Planets />
      </div>
    </div>
  );
};
