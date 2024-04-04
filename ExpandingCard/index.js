const panels = document.querySelectorAll('.panel')
panels.forEach( (panel) => {
panel.addEventListener('click', () => {
    removeActive()
    // console.log(123)
    panel.classList.add('active')
})
} ) 
function removeActive() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}