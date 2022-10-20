const form = document.querySelector("form")
let input = ""
form.addEventListener("submit", (event) => {

    event.preventDefault()
    input = document.querySelector("input").value

    fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=10&srsearch=${input}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
    
})