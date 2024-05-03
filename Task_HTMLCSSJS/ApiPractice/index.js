// const APIURL = 'https://dummyjson.com/products'

// ApiData(APIURL)

// async function ApiData(url) {
// const res = await fetch(url)
// const data = await res.json()
// console.log(data)
// showdata(data.products)
// } 


// async function showdata(products) {
//     // const dataelem = document.getElementById("data")
  
// products.forEach(product => {
//     const dataele = document.getElementById("data")
    
//     const {title, description, images, price, rating} = product
//     const movieEl = document.createElement('div')
//     movieEl.classList.add("movie")
//     dataele.appendChild(movieEl)
//     movieEl.classList.add('main')
//     movieEl.innerHTML = `
//     <div class="movie-info">
//     <p>${description}</p>
//     </div>


// <img src="${images}">

// <span>${price} </span>
// <span>${rating} </span>

// ` 
// });

//     // 2 divided into section
//     //  3 creating box by dev
    
//     }
    
    

// // first main div
 
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

// function loadScript(src, callback) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function() {
//         console.log("loaded script with SRC : " + src)
//         callback(null, src);
//     }
// script.onerror = function() {
//     console.log("Error loading scriptwith src: " + src);
//     callback(new Error("Src got some error"))
// }

//     document.body.appendChild(script);
// }

// function hello(error, src) {
//     alert('Hello World' + src);
// }

// function goodMorning(src) {
//     alert('good MOrning' + src);
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello)

let promise = new Promise(function(resolve, reject) {
    alert("Hello")
    resolve(58)
})

console.log("Hello One")
setTimeout(function() {
    console.log("Hello two i 2 seconds")
}, 2000)

console.log("My name is" +  "Hello There")