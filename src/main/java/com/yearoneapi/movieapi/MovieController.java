package com.yearoneapi.movieapi;

import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

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

    @PostMapping("api/movies/{id}/thumbsDown")
    public Movie thumbsDownMovieById(@PathVariable long id){
        Optional<Movie> oMovie = movieStorage.retrieveMovieById(id);
        return oMovie.map(movie -> movieStorage.thumbsDownMovie(movie)).orElse(null);
    }

    @PostMapping("api/movies/{id}/thumbsUp")
    public Movie thumbsUpMovieById(@PathVariable long id){
        Optional<Movie> oMovie = movieStorage.retrieveMovieById(id);
        return oMovie.map(movie -> movieStorage.thumbsUpMovie(movie)).orElse(null);
    }

    @PostMapping("/api/movies/add/")
    public Movie addMovie(@RequestBody Movie movie){
        return movieStorage.save(movie);
    }
}
