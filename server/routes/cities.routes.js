import express from "express";
import cityController from "../controllers/cities.controller.js";

const routes = express.Router();

const { createCity, getPopularCities, getLastCities } = cityController;

routes.post("/city", createCity);
routes.get("/city/popularCities", getPopularCities);
routes.get("/city/lastCities", getLastCities);

export default routes;
