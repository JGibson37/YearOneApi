package com.yearoneapi.movieapi;

import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin
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

    @PostMapping("/api/movies/add/")
    public Movie addMovie(@RequestBody Movie movie){
        return movieStorage.save(movie);
    }
}
