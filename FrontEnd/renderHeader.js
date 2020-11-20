export {createHeader}

const createHeader = () => {
    const headerContainer = document.createElement("container");
    headerContainer.classList.add('header-container');

    const h1 = document.createElement("h1");
    h1.classList.add('webpage-title');
    h1.innerHTML = `Welcome To the Movie Search`;

    headerContainer.prepend(h1);

    const form = document.createElement("form");
    headerContainer.append(form);
    
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");
    input1.setAttribute("type", "text")
    input2.setAttribute("type", "submit")
    form.append(input1)
    form.append(input2)

    return headerContainer;
}