import React, { useEffect, useContext } from "react";
import { useActionData, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const CharactersDeail = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getDetailCharacters(params.id);
  }, []);
  console.log(store.DetailCharacter);

  return (
    <div className="card mb-3" style={{ maxWidth: 540 }}>
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{store.DetailCharacter.name}</h5>
            <img
              src={
                "https://starwars-visualguide.com/assets/img/characters/" +
                params.id +
                ".jpg"
              }
            />
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharactersDeail;
