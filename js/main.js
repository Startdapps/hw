
const root = document.querySelector('#root')

const makeElement = (tagName, className) => {
    const element = document.createElement(tagName);
    element.classList.add(className);
    return element;
    
}

const getCharacters = async () => {
    const res = await fetch ('https://rickandmortyapi.com/api/character');
    const { results }  =  await res.json();

for (let i = 0; i < results.length; i++) {

    const { name , gender, image } = results[i];

    const charName = root.appendChild(makeElement('p','name'));
    const charGender =  root.appendChild(makeElement('p', 'gender'));
    const charPicture =  root.appendChild(makeElement ('img','picture'));
    charName.style.borderTop = 'solid';

    charName.innerText = `Name: ${name}`;
    charGender.innerText = `Gender: ${gender}`;
    charPicture.src = image;
}
}

getCharacters()


