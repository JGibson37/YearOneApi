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

    @PatchMapping("api/movies/{id}")
    public Movie updateMovieById(@PathVariable long id, @RequestBody Movie movie){
        //movieStorage.updateMovie(movie);
        return movieStorage.retrieveMovieById(id);
    }

    @PostMapping("/api/movies/add/")
    public Movie addMovie(@RequestBody Movie movie){
        return movieStorage.save(movie);
    }
}
