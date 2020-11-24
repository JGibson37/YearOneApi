import {fetchMovieFromIDRemote} from "./fetchMovies.js"
export {createBody}

const DEFAULT_MOVIE = {
    Title: 'Rogue One: A Star Wars Story',
    Director: 'Gareth Edwards',
    Plot: 'The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the plans for the Death Star.',
}

const createMovieDetailsHeader = (movie, container) => {
    const resultsTitle = document.createElement("h2")
    resultsTitle.setAttribute('id', 'movie-title')
    resultsTitle.classList.add('results-title')
    resultsTitle.innerHTML=movie.Title
    container.append(resultsTitle)

    const thumbsContainer = document.createElement("container")
    thumbsContainer.classList.add('thumbs-container')
    container.append(thumbsContainer)
    
    const thumbsUpButton = document.createElement("button")
    const thumbsDownButton = document.createElement("button")
    thumbsUpButton.innerHTML='Thumbs Up: 0'
    thumbsDownButton.innerHTML='Thumbs Down: 0'
    thumbsContainer.append(thumbsUpButton)
    thumbsContainer.append(thumbsDownButton)

    const directorContainer = document.createElement("container")
    directorContainer.classList.add('director-container')
    container.append(directorContainer)

    const directorH2 = document.createElement("h2")
    directorH2.innerHTML='Director'
    directorContainer.append(directorH2)

    const resultsDirector = document.createElement("div")
    resultsDirector.classList.add('results-director')
    resultsDirector.innerHTML=movie.Director
    directorContainer.append(resultsDirector)
}

const createMovieInfo = (movie,container) => {

    const descriptionContainer = document.createElement("container")
    descriptionContainer.classList.add('description-container')
    container.append(descriptionContainer)

    const descriptionH2 = document.createElement("h2")
    descriptionH2.classList.add('description-header')
    descriptionH2.innerHTML = 'Plot'
    descriptionContainer.append(descriptionH2)

    const resultsDescription = document.createElement("div")
    resultsDescription.innerHTML = movie.Plot
    descriptionContainer.append(resultsDescription)
}

const createMovieDetails = (movie, container) => {
    const movieDetailsContainer = document.createElement("container")
    movieDetailsContainer.setAttribute('id', 'movie-details-container')
    movieDetailsContainer.classList.add('movie-details-container')
    container.append(movieDetailsContainer)
    
    createMovieDetailsHeader(movie, movieDetailsContainer)

    const movieInfoContainer = document.createElement("container")
    movieInfoContainer.classList.add('movie-info-container')
    container.append(movieInfoContainer)

    createMovieInfo(movie, movieInfoContainer)
}

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
        const searchResultsDiv = document.getElementById("searchResults")
        searchResultsDiv.innerHTML = "";
        event.detail.forEach(movie => {
            const titleDivs = document.createElement("div")
            titleDivs.classList.add("movieTitle")
            titleDivs.innerHTML = `<button id="movie-button">${movie.Title}</button>`
            titleDivs.addEventListener("click", () =>{
                const movieID = movie.imdbID
                fetchMovieFromIDRemote(movieID)
                .then ((data) =>{
                    console.log("ID FETCH: " + data)
                    const fetchSpecific = new CustomEvent('fetchSpecific', { detail: data })
                    document.dispatchEvent(fetchSpecific)
                })
            })
            searchResultsDiv.append(titleDivs)
        })
    }

    const results = document.createElement("div")
    results.setAttribute('id', 'searchResults')
    document.addEventListener('SearchCompleted', grabMovies, true)
    searchContainer2.append(results)

    const combineDiv = document.createElement("div")
    combineDiv.setAttribute('id', 'combineDiv')
    combineDiv.setAttribute('class', 'combineDiv')
    bodyContainer.append(combineDiv)
    createMovieDetails(DEFAULT_MOVIE, combineDiv)

    const grabMovie= (event) => {
        console.log("I grabbed " + event.detail)
        const container = document.getElementById('combineDiv')
        container.innerHTML="";
        const movie = event.detail
        createMovieDetails(movie, container)
    }

    document.addEventListener('fetchSpecific', grabMovie, true)



    return bodyContainer;
}
