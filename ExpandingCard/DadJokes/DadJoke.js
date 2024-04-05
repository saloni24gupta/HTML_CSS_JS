const Joke = document.getElementById('joke')
const JokeBtn = document.getElementById('btn')


generateJoke()
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res =  await fetch('https:icanhazdadjoke.com', config)
const data = await res.json()
Joke.innerHTML = data.joke
}

JokeBtn.addEventListener('click', generateJoke)