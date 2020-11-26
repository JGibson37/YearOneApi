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
    private int thumbsUp;
    private int thumbsDown;

    public Movie(String title, String imdbId, int thumbsUp, int thumbsDown) {
        this.title = title;
        this.imdbId = imdbId;
        this.thumbsUp = thumbsUp;
        this.thumbsDown = thumbsDown;
    }

    protected Movie(){};

    public long getId(){
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getImdbId() {
        return imdbId;
    }

    public int getThumbsUp() {
        return thumbsUp;
    }

    public int getThumbsDown() {
        return thumbsDown;
    }

    public void incrementThumbsUp() {
        thumbsUp++;
    }

    public void incrementThumbsDown() {
        thumbsDown++;
    }
}
