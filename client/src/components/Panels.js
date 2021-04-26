import React, { useState } from "react";
import "../components/styles.css";
import ResultLeft from "./ResultLeft";
import TopCities from "./TopCities";
import LastCities from "./LastCities";
import api from "../services/api";

export default function PanelLeft() {
  const [cityName, setCity] = useState("");
  const [dataCity, setDataCity] = useState({});
  const [lastCity, setLastCity] = useState([]);
  const [topCity, setTopCity] = useState([]);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const body = { cityName };

    await api
      .post("city", body)
      .then((response) => {
        setDataCity(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    await api
      .get("city/popularCities")
      .then((response) => {
        setTopCity(response.data);
      })
      .catch((error) => console.error(error));

    await api.get("city/lastCities").then((response) => {
      setLastCity(response.data);
    });
  };

  return (
    <>
      <div className="app-container">
        <div className="left-container">
          <h2>Dados sobre as cidades</h2>
          <form className="form-control" onSubmit={onSubmitForm}>
            <input
              type="text"
              placeholder="Digite a cidade"
              value={cityName}
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">PESQUISAR</button>
          </form>
          <div className="result">
            <div>
              <ResultLeft dataCity={dataCity} />
            </div>
          </div>
        </div>

        <div className="right-container">
          <div className="top-cities">
            <h2>Cidades mais buscadas</h2>
            <div className="top-cities-result">
              <TopCities topCity={topCity} />
            </div>
          </div>

          <div className="last-cities">
            <h2>Últimas cidades pesquisadas</h2>
            <div className="last-cities-results">
              <LastCities lastCity={lastCity} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
