import axios from "axios";
import pool from "../db.js";
import modelCity from "../models/city.models.js";

//Creating the city and save in database
const createCity = async (req, res) => {
  try {
    //Entrada
    const { cityName } = req.body;

    const { data } = await axios(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=pt&appid=70a59bf021f595348b10bbbe1a94da04`
    );
    const { name, country, temperature, humidity, weather } = modelCity(data);

    // Saida para o banco
    const newCity = await pool.query(
      "INSERT INTO city(name, country, temperature, humidity, weather) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [name, country, temperature, humidity, weather]
    );

    res.json(newCity.rows[0]);
  } catch (err) {
    return res.send("Not Found");
  }
};

//Accessing the database and make the search
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

//Accessing the database and make the search
const getLastCities = async (req, res) => {
  try {
    const lastCities = await pool.query(
      "SELECT name AS last_cities, MAX(id) FROM city GROUP BY Last_cities ORDER BY MAX(id) DESC LIMIT 3"
    );
    res.json(lastCities.rows);
  } catch (err) {
    console.error(err);
    return res.status(404).send("Algum erro ocorreu na busca");
  }
};

export default { createCity, getPopularCities, getLastCities };
