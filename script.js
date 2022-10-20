const form = document.querySelector("form")
let input = ""
const section = document.querySelector("section")
let results = 
form.addEventListener("submit", (event) => {

    section.innerHTML = ""

    event.preventDefault()
    input = document.querySelector("input").value

    fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=10&srsearch=${input}`)
    .then((response) => response.json())
    .then((data) => {
        
        results = data["query"]["search"]
        console.log(results)
        let delay = 0

        for (const result of results) {
            console.log(result);
            let newArticle = document.createElement("article");
            newArticle.style.animationDelay = `${delay}s`
            newArticle.innerHTML = `<a target="_blank" href="https://en.wikipedia.org?curid=${result["pageid"]}"> ${result["title"]} </a> <p style="color:green"> https://en.wikipedia.org?curid=${result["pageid"]} </p> <p> ${result["snippet"]} </p> `
            section.appendChild(newArticle)
            delay = delay + 0.3

        }
    
    });

    
    
})

// https://en.wikipedia.org?curid=${}