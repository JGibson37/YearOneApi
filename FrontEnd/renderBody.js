import {fetchMovieFromIDRemote, fetchMovieFromLocal, postMovieToLocal, postMovieThumbsUpToLocal, postMovieThumbsDownToLocal} from "./fetchMovies.js"
export {createBody}

const DEFAULT_MOVIE = {
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg',
    Title: 'Rogue One: A Star Wars Story',
    Director: 'Gareth Edwards',
    Plot: 'The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the plans for the Death Star.',
    Released: '16 Dec 2016',
    Actors: 'Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen',
    Awards: 'Nominated for 2 Oscars. Another 24 wins & 80 nominations.',
    Writer: 'Chris Weitz (screenplay by), Tony Gilroy (screenplay by), John Knoll (story by), Gary Whitta (story by), George Lucas (based on characters created by)',
    Production: 'Lucasfilm Ltd.',
    Runtime: '133 min'
}

const drawThumbsButtons = (movie, thumbsContainer) => {
    thumbsContainer.innerHTML=""
    const thumbsUpButton = document.createElement("button")
    const thumbsDownButton = document.createElement("button")
    thumbsUpButton.setAttribute('id', 'thumbs-up-button')
    thumbsDownButton.setAttribute('id', 'thumbs-down-button')
    thumbsUpButton.innerHTML=`Thumbs Up: ${movie.thumbsUp || "0"}`
    thumbsDownButton.innerHTML= `Thumbs Down: ${movie.thumbsDown || "0"}`
    thumbsContainer.append(thumbsUpButton)
    thumbsContainer.append(thumbsDownButton)
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

    drawThumbsButtons(movie, thumbsContainer);
    
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

    const releaseYearContainer = document.createElement("container")
    releaseYearContainer.classList.add('release-year-container')
    container.append(releaseYearContainer)

    const releaseYearH2 = document.createElement("h2")
    releaseYearH2.innerHTML='Release Year'
    releaseYearContainer.append(releaseYearH2)

    const releaseYear = document.createElement("div")
    releaseYear.classList.add('release-year')
    releaseYear.innerHTML=movie.Released
    releaseYearContainer.append(releaseYear)

    const posterContainer = document.createElement("container")
    posterContainer.classList.add("poster-container")
    const posterDisplay = document.createElement("img")
    posterDisplay.setAttribute("src", movie.Poster)
    posterContainer.append(posterDisplay)
    container.append(posterContainer)
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

    const actorsContainer = document.createElement("container")
    actorsContainer.classList.add('actors-container')
    container.append(actorsContainer)

    const actorsH2 = document.createElement("h2")
    actorsH2.innerHTML="Prominent Actors"
    actorsContainer.append(actorsH2)

    const actors =document.createElement("div")
    actors.innerHTML=movie.Actors
    actorsContainer.append(actors)

    const awardsContainer = document.createElement("container")
    awardsContainer.classList.add('awards-container')
    container.append(awardsContainer)

    const awardsH2 = document.createElement("h2")
    awardsH2.innerHTML= 'Awards and Nominations'
    awardsContainer.append(awardsH2)

    const awards = document.createElement("div")
    awards.innerHTML = movie.Awards
    awardsContainer.append(awards)

    const writerContainer = document.createElement("container")
    writerContainer.classList.add("writer-container")
    container.append(writerContainer)

    const writerH2 = document.createElement("h2")
    writerH2.innerHTML= 'Written By'
    writerContainer.append(writerH2)

    const writers = document.createElement("div")
    writers.innerHTML= movie.Writer
    writerContainer.append(writers)

    const productionContainer = document.createElement("container")
    productionContainer.classList.add("producer-container")
    container.append(productionContainer)

    const producerH2 = document.createElement("h2")
    producerH2.innerHTML= 'Produced By'
    productionContainer.append(producerH2)

    const producer = document.createElement("div")
    producer.innerHTML= movie.Production
    productionContainer.append(producer)

    const runtimeContainer = document.createElement("container")
    runtimeContainer.classList.add("runtime-container")
    container.append(runtimeContainer)

    const runtimeH2 = document.createElement("h2")
    runtimeH2.innerHTML= 'Runtime'
    runtimeContainer.append(runtimeH2)

    const runtime = document.createElement("div")
    runtime.innerHTML= movie.Runtime
    runtimeContainer.append(runtime)
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
    resultsH2.classList.add("resultsH2-class")
    resultsH2.innerHTML='Search Results:'
    searchContainer.append(resultsH2)

    const searchContainer2 = document.createElement("container")
    searchContainer2.classList.add('search-results-container2')
    searchContainer.append(searchContainer2)

    const createSearchItemResult = (movie) => {
        const div = document.createElement("div")
        div.classList.add("movieTitle")
        div.innerHTML = `<button id="movie-button">${movie.Title}</button>`
        div.addEventListener("click", () =>{
            const movieID = movie.imdbID
            fetchMovieFromIDRemote(movieID)
            .then ((data) =>{
                console.log("ID FETCH: " + data)
                const fetchClickedMovie = new CustomEvent('fetchClickedMovie', { detail: data })
                document.dispatchEvent(fetchClickedMovie)
            })
        })
        return div
    }

    const displaySearchList= (event) =>{
        console.log(" Your movies are: " + event.detail)
        const searchResultsDiv = document.getElementById("searchResults")
        searchResultsDiv.innerHTML = "";
        event.detail.forEach(movie => {
            const item = createSearchItemResult(movie)
            searchResultsDiv.append(item)
        })
    }

    const results = document.createElement("div")
    results.setAttribute('id', 'searchResults')
    results.classList.add("search-list-results-container")
    document.addEventListener('SearchCompleted', displaySearchList, true)
    searchContainer2.append(results)

    const combineDiv = document.createElement("div")
    combineDiv.setAttribute('id', 'combineDiv')
    combineDiv.setAttribute('class', 'combineDiv')
    bodyContainer.append(combineDiv)
    createMovieDetails(DEFAULT_MOVIE, combineDiv)

    return bodyContainer;

}

const foundMatchGetThumbs = (event) => {
    const movie = event.detail;
    const thumbsUpButton = document.getElementById("thumbs-up-button")
    thumbsUpButton.innerHTML= `Thumbs Up: ${movie.thumbsUp}`
    const thumbsDownButton = document.getElementById("thumbs-down-button")
    thumbsDownButton.innerHTML= `Thumbs Down: ${movie.thumbsDown}`
    createThumbsEvents(thumbsUpButton, thumbsDownButton, movie);
}

const createThumbsEvents = (thumbsUpButton, thumbsDownButton, movie) => {
    thumbsUpButton.addEventListener("click", () => {
        postMovieThumbsUpToLocal(movie)
        .then(postMovie => {
            const thumbsContainer = document.querySelector(".thumbs-container")
            drawThumbsButtons(postMovie, thumbsContainer)
            const fetchLocalForThumbs = new CustomEvent('fetchLocalForThumbs', { detail: postMovie });
            document.dispatchEvent(fetchLocalForThumbs);
        })
    });
    thumbsDownButton.addEventListener("click", () => {
        postMovieThumbsDownToLocal(movie)
        .then(postMovie => {
            const thumbsContainer = document.querySelector(".thumbs-container")
            drawThumbsButtons(postMovie, thumbsContainer)
            const fetchLocalForThumbs = new CustomEvent('fetchLocalForThumbs', { detail: postMovie });
            document.dispatchEvent(fetchLocalForThumbs);
        })
    });
}

const shouldISaveMovie = async (movie) => {
    const localList = await fetchMovieFromLocal();
    let movieExists=false;
    for (let index of localList){
        if (index.imdbId === movie.imdbID){
            console.log("I exist already");
            movieExists=true;
            const fetchLocalForThumbs = new CustomEvent('fetchLocalForThumbs', { detail: index });
            document.dispatchEvent(fetchLocalForThumbs);
        } else {
            console.log("failed to find match");
        }
    }
    if(movieExists === false){
        let titleResult = movie.Title;
        let imdbIdResult = movie.imdbID;
        let sentMovie = { "title": titleResult, "imdbId": imdbIdResult, "thumbsUp": 0, "thumbsDown": 0};
        console.log(sentMovie)
        postMovieToLocal(sentMovie)
        .then(postedMovie => {
            console.log("You posted" + postedMovie)
            const fetchLocalForThumbs = new CustomEvent('fetchLocalForThumbs', { detail: postedMovie });
            document.dispatchEvent(fetchLocalForThumbs);  
        })
    }
}

const grabMovie= (event) => {
    console.log("I grabbed " + event.detail)
    const container = document.getElementById('combineDiv')
    container.innerHTML="";
    const movie = event.detail
    createMovieDetails(movie, container)
    shouldISaveMovie(movie)
}

document.addEventListener('fetchClickedMovie', grabMovie, true)
document.addEventListener('fetchLocalForThumbs', foundMatchGetThumbs, true)



   
