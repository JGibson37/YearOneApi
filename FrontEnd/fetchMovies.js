export {fetchMovieFromLocal, fetchMovieFromRemote, fetchMovieFromIDRemote, postMovieToLocal}

const fetchMovieFromLocal = () => {
  fetch(`http://localhost:8080/api/movies/`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

const fetchMovieFromRemote = (search) => {
  return fetch(
    `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${encodeURIComponent(search)}&page=1&r=json`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "af02123c16msh99467b35f3f43a0p11645ejsn2373f0b6b10a",
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
      },
    })
    .then((response) => response.json())
    .then((data) => { 
      console.log(data)
      return data;
    })
    .catch((err) => {
      console.error("The error is " + err);
      return null;
    });
}

const fetchMovieFromIDRemote = (search) => {
  return fetch(
    `https://movie-database-imdb-alternative.p.rapidapi.com/?i=${search}&r=json`, 
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "af02123c16msh99467b35f3f43a0p11645ejsn2373f0b6b10a",
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
      }
    })
    .then((response) => response.json())
    .then((data) => { 
      console.log(data)
      return data;
    })
    .catch((err) => {
      console.error("The error is " + err);
      return null;
    });
}


const postMovieToLocal = (movie) => {
  return fetch(`http://localhost:8080/api/movies/add/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
    }).then((response) => response.json());
};
