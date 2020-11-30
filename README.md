# YearOneApi<br><br>
<h1>How to setup and run your application</h1>

<b>1</b>
In order for this program to run, you need to have signed up for RapidAPI, and subscribed to <a href="https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative"> this API</a>. <br> <br>
<b>2</b>
After you have a valid API code, open the frontend folder with your preferred javascript editor (I use Visual Studio Code). Inside the file <i>fetchMovies.js</i> you need to add your valid APIkey and hostname <b>inside</b> the quotations of "x-rapidapi-key": "", "x-rapidapi-host": "" to the functions <i>fetchMovieFromRemote</i> and <i>FetchMovieFromIDRemote</i>. <br><br>
<b>3</b>
Open the project with your preferred java editor that has Spring (I use Intellij). Select the file "MovieapiApplication" and run it with your editor, this should boot the local API used to store thumbs up/down values. <br><br>
<b>4</b>
Once that is running, open the front end folder again. Open Index.html with a server add-on. I use <i>Live Server</i> with Visual Studio Code. Run "index.html" with live server. You are ready to start searching!<br><br>

<h2>Progam Description</h2><br><br>
This program is designed to interact with RapidAPI's Movie Database (IMDB Alternative) and with a local API built in java with Spring. It allows you to search for 
a movie, select it from the search results, and then interact with it by thumbs upping, or downing it. While all of  the movies information is pulled from the RapidAPI database,
the thumbs up and down are stored in the local API. How it works is that when a search happens, all the results from the RapidAPI Database are displayed on the left side of
the screen. Once a title is clicked on, its name and imdbid are saved into the local API with an initial thumbs up/down value. Then, the information from the RapidAPI database
is shown on screen, while local API returns the new movie with its initialized thumbs up/down values. Anytime the thumbs up/down are interacted with, an update is sent 
through the local API. Here is a GIF of the program working.

<a href="https://ibb.co/pKWqZ1Q"><img src="https://i.ibb.co/DMGdk1Y/Product.gif" alt="Product" border="0"></a>
