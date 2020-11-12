const sql = require("./db.js");

// constructor
const Movie = function(movie) {
  this.genre_id = movie.genre_id;
  this.producer_id = movie.producer_id;
  this.title = movie.title;
  this.summary = movie.summary;
  this.release_date = movie.release_date;
  this.end_release_date = movie.end_release_date;
  this.min_duration = movie.min_duration;
  this.prod_year = movie.prod_year;
};

//display 20 first movies with genre and producer
Movie.getSomeWithGenreProducer = result => {
  sql.query("SELECT movies.title, movies.summary, movies.release_date, movies.end_release_date, movies.min_duration, movies.prod_year, genres.name AS genre, producers.name AS producer FROM movies INNER JOIN genres ON movies.genre_id = genres.id LEFT JOIN producers ON movies.producer_id = producers.id WHERE movies.id BETWEEN 0 AND 19", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("20 firsts movies with genre: ", res);

    result(null, res);
  });
};

//display 20 first movies
Movie.getSome = result => {
    sql.query("SELECT title, summary, release_date, end_release_date, min_duration, prod_year FROM movies WHERE id BETWEEN 0 AND 19", (err, res) => {
        if (err){
            console.log("error: ", err);
            result(null, err);
            return
        }

        console.log("20 firsts movies: ", res);

        result(null, res);
    });
};


// display all details of 1 movie 
Movie.findAllById = (movieId, result) => {
  sql.query(`SELECT * FROM movies WHERE id = ${movieId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found movie: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Movie with the id
    result({ kind: "not_found" }, null);
  });
};

Movie.findGenreById = (movieId, result) => {
    sql.query(`SELECT genres.name FROM movies INNER JOIN genres ON movies.genre_id = genres.id WHERE movies.id = ${movieId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found genre of movie: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Movie with the id
      result({ kind: "not_found" }, null);
    });
  };


Movie.findProducerById = (movieId, result) => {
    sql.query(`SELECT producers.name FROM movies INNER JOIN producers ON movies.producer_id = producers.id WHERE movies.id = ${movieId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found producer of movie: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Movie with the id
      result({ kind: "not_found" }, null);
    });
  };


//display all movies
Movie.getAll = result => {
  sql.query("SELECT * FROM movies", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("movies: ", res);
    result(null, res);
  });
};


//Movie.updateById = (id, movie, result) => {
//  sql.query(
//    "UPDATE movies SET genre_id = ?, producer_id = ?, title = ?, summary = ?, release_date = ?, end_release_date = ?, min_duration = ?, prod_year = ? WHERE id = ?",
//    [movie.genre_id, movie.producer_id, movie.title, movie.summary, movie.release_date, movie.end_release_date, movie.min_duration, movie.prod_year, id],
//    (err, res) => {
//      if (err) {
//        console.log("error: ", err);
//        result(null, err);
//        return;
//      }
//
//      if (res.affectedRows == 0) {
//        // not found movie with the id
//        result({ kind: "not_found" }, null);
//        return;
//      }
//
//      console.log("updated movie: ", { id: id, ...movie });
//      result(null, { id: id, ...movie });
//    }
//  );
//};

//Customer.remove = (id, result) => {
//  sql.query("DELETE FROM customers WHERE id = ?", id, (err, res) => {
//    if (err) {
//      console.log("error: ", err);
//      result(null, err);
//      return;
//    }
//
//    if (res.affectedRows == 0) {
//      // not found Customer with the id
//      result({ kind: "not_found" }, null);
//      return;
//    }
//
//    console.log("deleted customer with id: ", id);
//    result(null, res);
//  });
//};
//
//Customer.removeAll = result => {
//  sql.query("DELETE FROM customers", (err, res) => {
//    if (err) {
//      console.log("error: ", err);
//      result(null, err);
//      return;
//    }
//
//    console.log(`deleted ${res.affectedRows} customers`);
//    result(null, res);
//  });
//};
//

//Movie.create = (newMovie, result) => {
//  sql.query("INSERT INTO movies SET ?", newMovie, (err, res) => {
//    if (err) {
//      console.log("error: ", err);
//      result(err, null);
//      return;
//    }
//
//    console.log("created movie: ", { id: res.insertId, ...newMovie });
//    result(null, { id: res.insertId, ...newMovie });
//  });
//};

//module.exports = Customer;

module.exports = Movie;