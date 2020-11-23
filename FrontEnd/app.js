import {createHeader} from "./renderHeader.js"
import {createBody} from "./renderBody.js"
import {createFooter} from "./renderFooter.js"
import {fetchMovieFromLocal, fetchMovieFromRemote} from "./fetchMovies.js"

fetchMovieFromRemote()
    .then(movies => renderPage(movies)) 

const renderPage = () => {
    const container = document.querySelector('.all-container');
    container.append(createHeader(movies))
    container.append(createBody(movies))
    container.append(createFooter(movies))
}