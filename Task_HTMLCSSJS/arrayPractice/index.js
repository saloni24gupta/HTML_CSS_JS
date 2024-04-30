const data = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]

data.forEach(values => {
   const btn = document.createElement('button')


   btn.classList.add('color')

   btn.innerText = values.color
   const button = document.getElementById('btn')
   button.appendChild(btn)
   btn.style.backgroundColor = values.color
   console.log(btn)
   const span = document.getElementById("span")
//    console.log(span)
   const textnode = document.createElement('span')
   textnode.innerText = values.value

   span.appendChild(textnode)
   console.log(textnode)
   span.classList.add('code')
})