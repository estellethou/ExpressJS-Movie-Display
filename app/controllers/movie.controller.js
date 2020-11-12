const Movie = require("../models/movie.model.js");

// Create and Save a new movies
//exports.create = (req, res) => {
//  
//};

exports.findTwentyWithGenreProducer = (req, res) => {
  Movie.getSomeWithGenreProducer((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving movies."
      });
    else res.send(data);
  });
};

// Retrieve 20 firsts movies
exports.findTwenty = (req, res) => {
    Movie.getSome((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving movies."
          });
        else res.send(data);
      });
};

 // Display all details of 1 movie
 exports.findOne = (req, res) => {
    Movie.findAllById(req.params.movieId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Movie with id ${req.params.movieId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Movie with id " + req.params.movieId
            });
          }
        } else res.send(data);
      });
};

//Return the genre of the movie with the specified id
exports.findGenre = (req, res) => {
  Movie.findGenreById(req.params.movieId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Movie with id ${req.params.movieId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Movie with id " + req.params.movieId
        });
      }
    } else res.send(data);
  });
};

//Return the producer of the movie with the specified id
exports.findProducer = (req, res) => {
    Movie.findProducerById(req.params.movieId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Movie with id ${req.params.movieId}.`
            });
          } else {
            res.status(500).send({
              message: "The movie doesn't have a producer " + req.params.movieId
            });
          }
        } else res.send(data);
      });
};

// Update a movies identified by the moviesId in the request
//exports.update = (req, res) => {
  
//};

// Delete a movies with the specified moviesId in the request
//exports.delete = (req, res) => {
  
//};

// Delete all moviess from the database.
//exports.deleteAll = (req, res) => {
  
//};