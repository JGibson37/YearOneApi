import {createHeader} from "./renderHeader.js"
import {fetchMovieFromLocal} from "./fetchMovies.js"


const renderPage = () => {
    const container = document.querySelector('.all-container');
    container.append(createHeader())
}

renderPage()

export {renderPage}