require("dotenv").config();
const port = process.env.APP_PORT;
const express = require("express");

const app = express();

app.use(express.json());

const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userControllers");
const validateMovie = require("./middlewares/validateMovie");
const validateUser = require("./middlewares/validateUser");

app.get("/api/movies", movieControllers.getMovies);
app.post("/api/movies", validateMovie, movieControllers.postMovie);

app.get("/api/movies/:id", movieControllers.getMovieById);
app.put("/api/movies/:id", validateMovie, movieControllers.updateMovie);
app.delete("/api/movies/:id", movieControllers.deleteMovie);

app.get("/api/users", userControllers.getUsers);
app.post("/api/users", validateUser, userControllers.postUser);

app.get("/api/users/:id", userControllers.getUserById);
app.put("/api/users/:id", validateUser, userControllers.updateUser);
app.delete("/api/users/:id", userControllers.deleteUser);

module.exports = app;
