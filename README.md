# YearOneApi

This program is designed to interact with RapidAPI's Movie Database (IMDB Alternative) and with a local API built in java with Spring. It allows you to search for 
a movie, select it from the search results, and then interact with it by thumbs upping, or downing it. While all of  the movies information is pulled from the RapidAPI database,
the thumbs up and down are stored in the local API. How it works is that when a search happen, all the results from the RapidAPI Database are displayed on the left side of
the screen. Once a title is clicked on, its name and imdbid are saved into the local API with an initial thumbs up/down value. Then, the information from the RapidAPI database
is shown on screen, while local API returns the new movie with its initialized thumbs up/down values. Anytime the thumbs up/down are interacted with, an update is sent 
through the local API. Here is a GIF of the program working.

<a href="https://ibb.co/pKWqZ1Q"><img src="https://i.ibb.co/DMGdk1Y/Product.gif" alt="Product" border="0"></a>
