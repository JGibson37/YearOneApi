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
    private String imdbId;
    private String thumbsUp;
    private String thumbsDown;

    public Movie(String title, String imdbId, String thumbsUp, String thumbsDown) {
        this.title = title;
        this.imdbId = imdbId;
        this.thumbsUp = thumbsUp;
        this.thumbsDown = thumbsDown;
    }

    protected Movie(){};

    public String getTitle() {
        return title;
    }

    public String getImdbId() {
        return imdbId;
    }

    public String getThumbsUp() {
        return thumbsUp;
    }

    public String getThumbsDown() {
        return thumbsDown;
    }

}
