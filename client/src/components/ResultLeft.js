import React, { Fragment } from "react";
import "./styles.css";

export default function ResultLeft({ dataCity }) {
  return (
    <Fragment>
      <p>Cidade: {dataCity.name}</p>
      <p>País: {dataCity.country}</p>
      <p>Temperatura em graus: {dataCity.temperature} </p>
      <p>Umidade: {dataCity.humidity}</p>
      <p>Clima: {dataCity.weather}</p>
    </Fragment>
  );
}
