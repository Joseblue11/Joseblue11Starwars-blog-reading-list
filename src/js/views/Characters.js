import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { CardCharacters } from "./CardCharacters";

const Characters = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getCharacters();
  }, []);
  console.log(store.characters);
  return (
    <div>
      <h1 className="text-danger">Characters</h1>
      <div className="my-carrusel">
        {store.characters.map((items, index) => (
          <CardCharacters items={items} id={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
