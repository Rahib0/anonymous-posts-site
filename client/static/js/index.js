
const form = document.querySelector('#form')

form.addEventListener('submit', sendData)
window.addEventListener('hashchange', updateContent)

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
            document.querySelector('#title').value = ''
            document.querySelector('#pseudonym').value = ''
            document.querySelector('#story').value = ''
            window.location.hash = `#${id}`
            updateContent()
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
    title.classList.add("title")
    pseudonym.textContent = data.pseudonym
    pseudonym.classList.add("pseudonym")
    story.textContent = data.story
    story.classList.add("story")

    card.append(title)
    card.append(pseudonym)
    card.append(story)

    let main = document.querySelector('main')
    main.innerHTML = ""
    main.append(card)
}

async function updateContent() {
    let hash = window.location.hash.substring(1);
    if (hash) {
        let form = document.querySelector('#form')
        form.style.display = 'none'
        let res = await fetch(`http://localhost:3000/posts/${hash}`)
        let data = await res.json()
        drawPost(data)
    } else {
        let form = document.querySelector('#form')
        form.style.display = 'block'
        let main = document.querySelector('main')
        main.innerHTML = ""
    }
}

updateContent()