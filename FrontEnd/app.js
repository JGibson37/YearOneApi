import {createHeader} from "./renderHeader.js"
import {createBody} from "./renderBody.js"


const renderPage = () => {
    const container = document.querySelector('.all-container');
    container.append(createHeader())
    container.append(createBody())
}

renderPage()