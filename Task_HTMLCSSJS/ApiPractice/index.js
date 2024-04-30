const APIURL = 'https://dummyjson.com/products'

ApiData(APIURL)

async function ApiData(url) {
const res = await fetch(url)
const data = await res.json()
console.log(data)
showdata(data.products)
} 


async function showdata(products) {
    // const dataelem = document.getElementById("data")
  
products.forEach(product => {
    const dataele = document.getElementById("data")
    
    const {title, description, images, price, rating} = product
    const movieEl = document.createElement('div')
    movieEl.classList.add("movie")
    dataele.appendChild(movieEl)
    movieEl.classList.add('main')
    movieEl.innerHTML = `
    <div class="movie-info"></div>

<img src="${images}">
` 
});

    // 2 divided into section
    //  3 creating box by dev
    
    }
    
    

// first main div
 