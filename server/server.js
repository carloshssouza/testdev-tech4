import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/cities.routes.js";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(routes);

//Iniciando o servidor
app.listen(PORT, () => {
  console.log("Server has started on port 8000");
});
