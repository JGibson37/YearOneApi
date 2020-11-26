package com.yearoneapi.movieapi;

import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class MovieStorage {

    private MovieRepository movieRepo;

    public MovieStorage(MovieRepository movieRepo) {
        this.movieRepo = movieRepo;
    }

    public Movie save(Movie movie) {
        return movieRepo.save(movie);
    }

    public Collection<Movie> retrieveAllMovies(){
        return (Collection<Movie>) movieRepo.findAll();
    }

    public Optional<Movie> retrieveMovieById(Long id){
        return movieRepo.findById(id);
    }

    public Movie thumbsUpMovie(Movie movie) {
        movie.incrementThumbsUp();
        return save(movie);
    }

    public Movie thumbsDownMovie(Movie movie){
        movie.incrementThumbsDown();
        return save(movie);
    }
}
