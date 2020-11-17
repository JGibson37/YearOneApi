package com.yearoneapi.movieapi;

import org.springframework.stereotype.Service;

@Service
public class MovieStorage {

    private MovieRepository movieRepo;

    public MovieStorage(MovieRepository movieRepo) {
        this.movieRepo = movieRepo;
    }

    public Movie save(Movie movie) {
        return movieRepo.save(movie);
    }

    public Iterable<Movie> retrieveAllMovies(){
        return movieRepo.findAll();
    }

    public Movie retrieveMovieById(Long id){
        return movieRepo.findById(id).get();
    }
}
