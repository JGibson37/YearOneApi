import {clearElementChildren} from "./clearDom.js"
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

    const yourRatings2 = document.createElement("container")
    yourRatings2.classList.add('your-ratings-2')
    recentRatingsContainer.append(yourRatings2)

    const resultsTitleH22 = document.createElement("h2")
    resultsTitleH22.classList.add('results-title')
    resultsTitleH22.innerHTML='Spiderman'
    yourRatings2.append(resultsTitleH22)

    const thumbsContainer2 = document.createElement("container")
    thumbsContainer2.classList.add('thumbs-container')
    yourRatings2.append(thumbsContainer2)

    const thumbsUpButton2 = document.createElement("button")
    const thumbsDownButton2 = document.createElement("button")
    thumbsUpButton2.innerHTML='Thumbs Up: 0'
    thumbsDownButton2.innerHTML='Thumbs Down: 0'
    thumbsContainer2.append(thumbsUpButton2)
    thumbsContainer2.append(thumbsDownButton2)

    const yourRatings3 = document.createElement("container")
    yourRatings3.classList.add('your-ratings-3')
    recentRatingsContainer.append(yourRatings3)

    const resultsTitleH222 = document.createElement("h2")
    resultsTitleH222.classList.add('results-title')
    resultsTitleH222.innerHTML='Spiderman'
    yourRatings3.append(resultsTitleH222)

    const thumbsContainer3 = document.createElement("container")
    thumbsContainer3.classList.add('thumbs-container')
    yourRatings3.append(thumbsContainer3)

    const thumbsUpButton3 = document.createElement("button")
    const thumbsDownButton3 = document.createElement("button")
    thumbsUpButton3.innerHTML='Thumbs Up: 0'
    thumbsDownButton3.innerHTML='Thumbs Down: 0'
    thumbsContainer3.append(thumbsUpButton3)
    thumbsContainer3.append(thumbsDownButton3)

    return ratingsContainer;
}