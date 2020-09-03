import React, { useMemo } from "react";
import queryString from "query-string";
import { HeroCard } from "../heroes/HeroCard";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router-dom";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();

    history.push(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form
            onSubmit={handleSearch}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Busca tu heroe"
              className="form-control"
              onChange={handleInputChange}
              value={searchText}
              name="searchText"
            />
            <button
              type="submit"
              className="btn mt-3 btn-block btn-outline-primary"
            >
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {q === "" && <div className="alert alert-info">Busca un heroe</div>}

          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">
              No hay ningun heroe con el nombre {q}
            </div>
          )}

          {heroesFiltered.map((hero) => (
            <div className="p-2" key={hero.id}>
              <HeroCard {...hero} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
