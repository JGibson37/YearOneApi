

const fetchMovieFromApi = async  () => {
	return fetch("http://localhost:8080/api/movie/").then((response) =>
	response.json()
	);
}