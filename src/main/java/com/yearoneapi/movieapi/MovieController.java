package com.yearoneapi.movieapi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class MovieController {

    MovieStorage movieStorage;

    public MovieController(MovieStorage movieStorage) {
        this.movieStorage = movieStorage;
    }

    @GetMapping("api/movies/")
    public Collection<Movie> retrieveAllMovies(){
        return movieStorage.retrieveAllMovies();
    }

    @GetMapping("api/movies/{id}")
    public Movie returnMovieById(@PathVariable long id){
        return movieStorage.retrieveMovieById(id);
    }
}
