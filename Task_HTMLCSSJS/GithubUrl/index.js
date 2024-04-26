const APIURL = 'https://api.github.com/users/'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')
getUser('saloni24gupta')
async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)
        createUserCard(data)
    }
    catch(err){
       if(err.response.status == 404) {
        createErrorCard('No profile with this username')
       }
    }
    // const res = await axios(APIURL + username) 
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err))
    // console.log(res)
}

function createUserCard(user){
    const cardHTML = `
    <div class="card">
            <div >
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repos</strong></li>

                    <div id="repos">
                          </div>
                </ul>
            </div>
        </div>
    `
    main.innerHTML = cardHTML
}

function createErrorCard(msg) {
    const cardHTML =`
    <div class="card">
    <h1>${msg}</h1>
    </div>
    `
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value;
    
    if(user) {
        getUser(user)
        search.value = ''
    }
})