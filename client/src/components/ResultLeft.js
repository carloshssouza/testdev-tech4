import React from "react";
import "./styles.css";

export default function ResultLeft({ dataCity }) {
  const errorStyle = {
    backgroundColor: "rgba(255,67,67,0.6)",
  };

  if (dataCity === "Not Found") {
    return <p style={errorStyle}>Cidade não encontrada</p>;
  } else {
    return (
      <>
        <p>Cidade: {dataCity.name}</p>
        <p>País: {dataCity.country}</p>
        <p>Temperatura em graus: {dataCity.temperature} </p>
        <p>Umidade: {dataCity.humidity}</p>
        <p>Clima: {dataCity.weather}</p>
      </>
    );
  }
}
