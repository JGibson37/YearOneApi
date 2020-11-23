package com.yearoneapi.movieapi;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {
    MovieStorage movieStorage;

    public Populator(MovieStorage movieStorage){
        this.movieStorage = movieStorage;
    }

    @Override
    public void run(String... args) throws Exception {
        Movie movie1 = new Movie("Test Movie", "456wh4", "0", "0");
        movieStorage.save(movie1);
    }
}
