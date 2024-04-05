const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => {

    panel.addEventListener('click', () => {
        removePanel()
        panel.classList.add('active')
        console.log(12)
    })

})

function removePanel() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}