import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export const CardPlanets = ({ items, id }) => {
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
        <h5 className="card-title">{items.name}</h5>
        <p>climate:{items.climate}</p>
        <p>gravity:{items.gravity}</p>
        <p>orbital period:{items.orbital_period}</p>
        <p>rotation period:{items.rotation_period}</p>
        <div className="icons">
          <a href="#" className="btn btn-outline-primary">
            Go somewhere
          </a>
          <button type="button" class="btn btn-outline-warning">
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
