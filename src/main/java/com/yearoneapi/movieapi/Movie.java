package com.yearoneapi.movieapi;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Movie {

    @Id
    @GeneratedValue
    private long id;
    private String title;
    private String director;
    private String description;
    private String thumbsUp;
    private String thumbsDown;

    public Movie(String title, String director, String description, String thumbsUp, String thumbsDown) {
        this.title = title;
        this.director = director;
        this.description = description;
        this.thumbsUp = thumbsUp;
        this.thumbsDown = thumbsDown;
    }

    protected Movie(){};

    public String getTitle() {
        return title;
    }

    public String getDirector() {
        return director;
    }

    public String getDescription() {
        return description;
    }

    public String getThumbsUp() {
        return thumbsUp;
    }

    public String getThumbsDown() {
        return thumbsDown;
    }

}
