module.exports = app => {
    const movies = require("../controllers/movie.controller.js");

    // Retrieve 20 firsts movies with producer and genre
    app.get("/api/movies/all", movies.findTwentyWithGenreProducer);
  
    // Retrieve 20 firsts movies
    app.get("/api/movies", movies.findTwenty);

    // Display all details of 1 movie
    app.get("/api/movies/:movieId", movies.findOne);

    //Return the genre of the movie with the specified id
    app.get("/api/movies/:movieId/genres", movies.findGenre);

    //Return the producer of the movie with the specified id
    app.get("/api/movies/:movieId/producers", movies.findProducer);

    app.all('/', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      next();
     });
    
    // Create a new Movie
    //app.post("/movies", movies.create);
  
    // Retrieve all Movies
    //app.get("/api/movies", movies.findAll);
  
    // Update a Movie with movieId
    //app.put("/movies/:movieId", movies.update);
  
    // Delete a Movie with movieId
    //app.delete("/movies/:movieId", movies.delete);
  
    // Create a new Movie
    //app.delete("/movies", movies.deleteAll);
  };