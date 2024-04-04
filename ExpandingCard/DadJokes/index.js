const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
generateJoke()

//method1
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     fetch('https:icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => 
//     // console.log(data);
// jokeEl.innerHTML = data.joke
// )


     //method 2
async function generateJoke() {
        const config = {
            headers: {
                'Accept': 'application/json'
            }
        }

        const res =  await fetch('https:icanhazdadjoke.com', config)
const data = await res.json()
jokeEl.innerHTML = data.joke
    }
jokeBtn.addEventListener('click', generateJoke)
    
