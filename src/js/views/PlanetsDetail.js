import React, { useEffect, useContext } from "react";
import { useActionData, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/cardDetail.css";

const PlanetsDetail = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getDetailPlanets(params.id);
  }, []);
  console.log(store.DetailPlanets);

  return (
    <div className="Detail container-fluid">
      <h1 className="text-danger">Planets</h1>
      <div className="Detail1 container-fluid d-flex justify-content-center">
        <div className="cardDetail1 mb-3 d-flex">
          <div className="cardDetail2 row g-0 ">
            <div className="col-md-4">
              <img
                src={
                  "https://starwars-visualguide.com/assets/img/planets/" +
                  params.id +
                  ".jpg"
                }
                className="img-fluid"
                alt={store.DetailPlanets?.name}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">{store.DetailPlanets?.name}</h2>
                <p className="text">
                  Star Wars es una franquicia épica de ciencia ficción y
                  fantasía, creada por George Lucas en 1977. La saga se
                  desarrolla en una galaxia ficticia donde se libra una eterna
                  batalla entre el bien y el mal, representados por la Fuerza,
                  una energía mística que otorga poderes especiales. Los
                  protagonistas, como Luke Skywalker, la Princesa Leia y Han
                  Solo, encarnan la lucha por la libertad y la justicia contra
                  las fuerzas del Imperio Galáctico, liderado por el Emperador
                  Palpatine y sus Señores Oscuros de los Sith. A lo largo de las
                  nueve películas principales y dos derivadas, la saga nos
                  sumerge en un universo lleno de naves espaciales, sables de
                  luz, droides y criaturas fantásticas, explorando los misterios
                  de la Fuerza y la evolución de los personajes. Más allá del
                  cine, Star Wars se ha expandido a series de televisión,
                  cómics, novelas, videojuegos y merchandising, enriqueciendo y
                  ampliando este universo ficticio de una manera sin
                  precedentes. La épica de Star Wars ha cautivado a generaciones
                  de fans en todo el mundo, convirtiéndose en un fenómeno
                  cultural que trasciende los límites del entretenimiento y
                  aborda temas profundos como el bien, el mal, la identidad y el
                  poder de la amistad.
                </p>
                <p className="card-text"></p>
              </div>
            </div>
            <br />
            <div className="FooterDetail container-fluid">
              <div className="text">
                <p>Name</p>
                <p>{store.DetailPlanets?.name}</p>
              </div>
              <div className="text">
                <p>climate</p>
                <p>{store.DetailPlanets?.climate}</p>
              </div>
              <div className="text">
                <p>diameter</p>
                <p>{store.DetailPlanets?.diameter}</p>
              </div>
              <div className="text">
                <p>gravity</p>
                <p>{store.DetailPlanets?.gravity}</p>
              </div>
              <div className="text">
                <p>terrain</p>
                <p>{store.DetailPlanets?.terrain}</p>
              </div>
              <div className="text">
                <p>orbital period</p>
                <p>{store.DetailPlanets?.orbital_period}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetsDetail;
