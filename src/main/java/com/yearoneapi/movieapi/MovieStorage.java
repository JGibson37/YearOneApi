package com.yearoneapi.movieapi;

import org.springframework.stereotype.Service;

import java.util.Collection;

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

    public Movie retrieveMovieById(Long id){
        return movieRepo.findById(id).get();
    }
}
