import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroById";

export const HeroScreen = ({ history }) => {
  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

  if (!hero) {
    return <Redirect to="/" />;
  }
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;
    console.log(characters);
  return (
    <div className="row mt-5 mb-5">
      <div className="col-md-4 col-sm-12 mb-3">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-md-8 col-sm-12">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego: </b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Editorial: </b> {publisher}
          </li>
          <li className="list-group-item">
            <b>Primera Aparición: </b> {first_appearance}
          </li>
        </ul>
        <h5>Personajes</h5>
        {/* <p>{characters}</p> */}
        <ul>
          {characters.map(char => ( <li>{char}</li>))}
        </ul>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
