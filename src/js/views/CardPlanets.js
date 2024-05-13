import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useActionData } from "react-router-dom";

export const CardPlanets = ({ items, id }) => {
  const { actions } = useContext(Context);
  const handlerFavorite = (item) => {
    actions.favorites(item);
    console.log("handlerFavorite esta funcionando");
  };

  console.log(items);
  return (
    <div className="my-card">
      <img
        src={
          "https://starwars-visualguide.com/assets/img/planets/" + id + ".jpg"
        }
        className="card-img-top"
        alt={items.name}
      />
      <div className="card-body">
        <h3 className="card-title">{items.name}</h3>
        <div className="icons">
          <Link to={`/planets/${id}`} className="btn btn-outline-primary">
            Saber mas
          </Link>
          <button
            type="button"
            class="btn btn-outline-warning"
            onClick={() => handlerFavorite(items)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
