import axios from "axios";
import pool from "../db.js";

const createCity = async (req, res) => {
  try {
    //Entrada
    let city = "Rio de Janeiro";

    const { data } = await axios(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt&appid=70a59bf021f595348b10bbbe1a94da04`
    );

    let name = data.name;
    let country = data.sys.country;
    let temperature = data.main.temp - 273.15;
    let humidity = data.main.humidity;
    let weather = data.weather[0].description;

    //Saida para o banco
    const newCity = await pool.query(
      "INSERT INTO city(name, country, temperature, humidity, weather) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [name, country, temperature, humidity, weather]
    );
    res.json(newCity.rows[0]);
  } catch (err) {
    console.error(err);
    return res.status(404).send("Cidade não encontrada");
  }
};

const getPopularCities = async (req, res) => {
  try {
    const mostPopularCities = await pool.query(
      "SELECT name, COUNT(name) AS qtd FROM city GROUP BY name ORDER BY qtd DESC LIMIT 5"
    );
    res.json(mostPopularCities.rows);
  } catch (err) {
    console.error(err);
    return res.status(404).send("Algum erro ocorreu na busca");
  }
};

const getLastCities = async (req, res) => {
  try {
    const lastCities = await pool.query(
      "SELECT name AS last_cities,MAX(id) FROM city GROUP BY Last_cities ORDER BY MAX(id) DESC LIMIT 3"
    );
    res.json(lastCities.rows);
  } catch (err) {
    console.error(err);
    return res.status(404).send("Algum erro ocorreu na busca");
  }
};

export default { createCity, getPopularCities, getLastCities };
