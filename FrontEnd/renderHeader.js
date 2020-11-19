export {createHeader}

const createHeader = () => {
    const headerContainer = document.createElement("container")
    headerContainer.classList.add('header-container')

    const h1 = document.createElement("h1")
    h1.innerHTML = `Welcome To the Movie Search`

}