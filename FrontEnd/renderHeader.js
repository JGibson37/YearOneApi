export {createHeader}
import {fetchMovieFromLocal, fetchMovieFromRemote, postMovieToLocal} from "./fetchMovies.js"


const createHeader = () => {
    const headerContainer = document.createElement("container");
    headerContainer.classList.add('header-container');

    const h1 = document.createElement("h1");
    h1.classList.add('webpage-title');
    h1.innerHTML = `Welcome To the Movie Search`;

    headerContainer.prepend(h1);

    const form = document.createElement("form");
    form.setAttribute("id", "form1")
    headerContainer.append(form);

    const formSubmit = (event) => {
        const formData = new FormData(event.target);
        let data = {};
        for (let pair of formData.entries()) {
            data[pair[0]] = pair[1];
        }
        fetchMovieFromRemote(data.mName)
        .then((data) => {
            for (let index = 0; index < data.Search.length; index++) {
                let titleResult = data.Search[index].Title;
                let imdbIdResult = data.Search[index].imdbID;
                let movie = { "title": titleResult, "imdbId": imdbIdResult, "thumbsUp": 0, "thumbsDown": 0};
                console.log(movie)
                postMovieToLocal(movie);
            }
        });
        event.preventDefault();
    }

    form.addEventListener("submit", formSubmit)
    
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");
    input1.setAttribute("type", "text")
    input1.setAttribute("name", "mName")
    input2.setAttribute("type", "submit")
    input2.setAttribute("submit", "Submit")
    form.append(input1)
    form.append(input2)

    return headerContainer;
}