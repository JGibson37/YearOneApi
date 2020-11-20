export {createFooter}

const createFooter = () => {

    const ratingsContainer = document.createElement("container")
    ratingsContainer.classList.add('ratings-container')

    const ratingsTitle = document.createElement("h3")
    ratingsTitle.classList.add('ratings-title')
    ratingsTitle.innerHTML='Your recently rated movies:'
    ratingsContainer.append(ratingsTitle)

    const recentRatingsContainer = document.createElement("container")
    recentRatingsContainer.classList.add('recent-ratings-container')
    ratingsContainer.append(recentRatingsContainer)

    const yourRatings1 = document.createElement("container")
    yourRatings1.classList.add('your-ratings-1')
    recentRatingsContainer.append(yourRatings1)

    const resultsTitleH2 = document.createElement("h2")
    resultsTitleH2.classList.add('results-title')
    resultsTitleH2.innerHTML='Spiderman'
    yourRatings1.append(resultsTitleH2)

    const thumbsContainer = document.createElement("container")
    thumbsContainer.classList.add('thumbs-container')
    yourRatings1.append(thumbsContainer)
    
    const thumbsUpButton = document.createElement("button")
    const thumbsDownButton = document.createElement("button")
    thumbsUpButton.innerHTML='Thumbs Up: 0'
    thumbsDownButton.innerHTML='Thumbs Down: 0'
    thumbsContainer.append(thumbsUpButton)
    thumbsContainer.append(thumbsDownButton)

    return ratingsContainer;
}