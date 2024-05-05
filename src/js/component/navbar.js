import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              className="img-navbar"
              src="https://www.viniloscasa.com/36023-thickbox/vinilos-decorativos-y-pegatinas-logo-star-wars.jpg"
              alt="logo"
              style={{ width: "100px", objectFit: "cover" }}
            />
          </span>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">
              Check the Context in action
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
