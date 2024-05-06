import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";



export const Card = ({ imageSrc, title, text, buttonText, buttonLink }) => {
  return (
    <div className="my-card">
          <img
            src="https://img.freepik.com/vector-gratis/fondo-galaxia-realista_52683-12122.jpg?t=st=1714960251~exp=1714963851~hmac=764f1d6be42e60b3f4971d520327b8738b29cb4b803fc8eada2957a3a428bd90&w=740"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">planeta</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
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
