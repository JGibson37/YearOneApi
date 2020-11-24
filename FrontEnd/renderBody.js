import {fetchMovieFromRemote, fetchMovieFromLocal} from "./fetchMovies.js"
export {createBody}

const createBody = () => {
    const bodyContainer = document.createElement("container")
    bodyContainer.classList.add('search-title-movie-container')

    const searchContainer = document.createElement("container")
    searchContainer.classList.add('search-results-container')
    bodyContainer.append(searchContainer)

    const resultsH2 = document.createElement("h2")
    resultsH2.innerHTML='Search Results:'
    searchContainer.append(resultsH2)

    const searchContainer2 = document.createElement("container")
    searchContainer2.classList.add('search-results-container2')
    searchContainer.append(searchContainer2)

    const grabMovies= (event) =>{
        console.log(" Your movies are: " + event.detail)
    }

    const results = document.createElement("div")
    document.addEventListener('SearchCompleted', grabMovies, true)
    results.innerHTML='Spiderman'
    searchContainer2.append(results)

    const titleContainer = document.createElement("container")
    titleContainer.classList.add('title-container')
    bodyContainer.append(titleContainer)

    const resultsTitle = document.createElement("h2")
    resultsTitle.classList.add('results-title')
    resultsTitle.innerHTML='Spiderman'
    titleContainer.append(resultsTitle)

    const thumbsContainer = document.createElement("container")
    thumbsContainer.classList.add('thumbs-container')
    titleContainer.append(thumbsContainer)
    
    const thumbsUpButton = document.createElement("button")
    const thumbsDownButton = document.createElement("button")
    thumbsUpButton.innerHTML='Thumbs Up: 0'
    thumbsDownButton.innerHTML='Thumbs Down: 0'
    thumbsContainer.append(thumbsUpButton)
    thumbsContainer.append(thumbsDownButton)

    const directorContainer = document.createElement("container")
    directorContainer.classList.add('director-container')
    titleContainer.append(directorContainer)

    const directorH2 = document.createElement("h2")
    directorH2.innerHTML='Director'
    directorContainer.append(directorH2)

    const resultsDirector = document.createElement("div")
    resultsDirector.classList.add('results-director')
    resultsDirector.innerHTML='Sam Raimi'
    directorContainer.append(resultsDirector)

    const movieInfoContainer = document.createElement("container")
    movieInfoContainer.classList.add('movie-info-container')
    bodyContainer.append(movieInfoContainer)

    const descriptionContainer = document.createElement("container")
    descriptionContainer.classList.add('description-container')
    movieInfoContainer.append(descriptionContainer)

    const descriptionH2 = document.createElement("h2")
    descriptionH2.classList.add('description-header')
    descriptionH2.innerHTML='Description'
    descriptionContainer.append(descriptionH2)

    const resultsDescription = document.createElement("div")
    resultsDescription.innerHTML='Generation Defining Movie'
    descriptionContainer.append(resultsDescription)

    return bodyContainer;
}