package com.yearoneapi.movieapi;

import org.springframework.stereotype.Service;

@Service
public class MovieStorage {

    private MovieRepository movieRepo;

    public MovieStorage(MovieRepository movieRepo) {
        this.movieRepo = movieRepo;
    }
}
