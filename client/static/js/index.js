const { post } = require("../../../server/app")

const form = document.querySelector('#form')

form.addEventListener('submit', sendData)

function sendData(e) {
    e.preventDefault
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        const res = await fetch('http://localhost:3000/books', options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            getData()
        }
    } catch(err) {
        console.log(err)
    }
}

async function getData() {
    try {
        res = await fetch('http://localhost:3000/')
        data = await res.json()
        data.forEach(post => {
            drawPost(post)
        });
    } catch(err) {
        console.log(err)
    }
}

function drawPost(data) {
    let card = document.createElement('div')
    let title = document.createElement('h2')
    let pseudonym = document.createElement('h3')
    let story = document.createElement('p')

    title.textContent = data.title
    pseudonym.textContent = data.pseudonym
    story.textContent = data.story

    card.append(title)
    card.append(pseudonym)
    card.append(story)

    let main = document.querySelector('main')
    main.append(card)
}

getData()