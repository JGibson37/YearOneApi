
const fetchMovieFromLocal = () => {
fetch("http://localhost:8080/api/movies/")
  .then((response) => response.json())
  .then((data) => console.log(data));
}

const fetchMovieFromRemote = () => {
fetch(
  "https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&page=1&r=json",
  {
    method: "GET",
    headers: {
      "x-rapidapi-key": "af02123c16msh99467b35f3f43a0p11645ejsn2373f0b6b10a",
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
    },
  }
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => {
    console.error(err);
  });
}