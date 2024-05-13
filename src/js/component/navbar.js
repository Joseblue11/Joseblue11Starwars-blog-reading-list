import React,{useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  const{store}= useContext(Context)
  
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
          <div className="dropdown">
            <a
              className="btn btn-primary dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
            </a>
            <ul className="dropdown-menu">
              {store.favorites &&
                store.favorites.map((ele) => {
                  return (
                    <li>
                      <a className="dropdown-item" href="#">
                        {ele.name}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
