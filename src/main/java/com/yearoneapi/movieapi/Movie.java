package com.yearoneapi.movieapi;

public class Movie {

    private String title;
    private String director;
    private String description;
    private int thumbsUp;
    private int thumbsDown;

    public Movie(String title, String director, String description, int thumbsUp, int thumbsDown) {
        this.title = title;
        this.director = director;
        this.description = description;
        this.thumbsUp = thumbsUp;
        this.thumbsDown = thumbsDown;
    }
    public String getTitle() {
        return title;
    }

    public String getDirector() {
        return director;
    }

    public String getDescription() {
        return description;
    }

    public int getThumbsUp() {
        return thumbsUp;
    }

    public int getThumbsDown() {
        return thumbsDown;
    }
}
