import {createHeader} from "./renderHeader.js"
import {createBody} from "./renderBody.js"
import {createFooter} from "./renderFooter.js"
import {fetchMovieFromLocal} from "./fetchMovies.js"


const renderPage = () => {
    const container = document.querySelector('.all-container');
    container.append(createHeader())
    container.append(createBody())
    container.append(createFooter())
}

renderPage()