

// const fetchMovieFromApi = async  () => {
// 	return fetch("http://localhost:8080/api/movie/").then((response) =>
// 	response.json()
// 	);
// }

fetch('http://localhost:8080/api/movies/')
  .then(response => response.json())
  .then(data => console.log(data));