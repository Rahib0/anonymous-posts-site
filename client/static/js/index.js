
const form = document.querySelector('#form')

form.addEventListener('submit', sendData)

async function sendData(e) {
    e.preventDefault()
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        console.log(options.body)
        const res = await fetch('http://localhost:3000/posts', options);
        const { id, err } = await res.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location.reload()
        }
    } catch(err) {
        console.log(err)
    }
}

async function getData() {
    try {
        // console.log("hello")
        let res = await fetch('http://localhost:3000/posts')
        // console.log(res)
        let data = await res.json()
        console.log(data)
        // console.log(data.posts)
        if (!data) { throw new Error("no posts")}
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