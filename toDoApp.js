let myToDos = [{
    text: "Vynést koš",
    completion: false
}, {
    text: "Dojít nakoupit",
    completion: false
}, {
    text: "Uklidit",
    completion: false
}, {
    text: "Nakrmit psa",
    completion: true
}, {
    text: "Nakrmit kočku",
    completion: true
}]

//****** Vypíše počet, kolik zbývá dokončit úkolů *****/
// let toDoLeft = myToDos.filter(function(oneToDo){
//     return oneToDo.completion === false
// })

// const paragraph = document.createElement("p")
// paragraph.textContent = `Ještě zbývá udělat úkolů: ${toDoLeft.length}`
// document.querySelector("main").appendChild(paragraph)




// Vypíše všechny úkoly do odstavců a zobrazí je na stránce
for(let i=0; i<myToDos.length; i++){
    let paragraph = document.createElement("p")
    paragraph.textContent = myToDos[i].text
    document.querySelector("#results-todos").appendChild(paragraph)
}


// Tlačítko
document.querySelector(".myBtn").addEventListener("click", function(event){
    console.log("Klidknutí bylo provedeno")
})


/************* 
* Filtrování * 
**************/

// Pro ukládání textu z vyhledávacího políčka
const filters = {
    searchingText: ""
}


// Obecná filtrovací funkce
let renderToDos = function(ourToDos, weSearching){
    let ourResult = ourToDos.filter(function(oneToDo){
        return oneToDo.text.toLowerCase().includes(weSearching.searchingText.toLowerCase())
    })
    // Promazání počítání a vypisování počtu zbývajících úkolů z filtrování
    document.querySelector("#to-dos-left").innerHTML = ""

    // Počítání zbývajících úkolů z filtrování
    let leftToDos = ourResult.filter(function(oneToDo){
        return oneToDo.completion === false
    })
    // Vypisování počtu zbývajících úkolů z filtrování na stránce
    let paragraph = document.createElement("p")
    paragraph.textContent = `Ještě nám zbývá udělat: ${leftToDos.length}`
    document.querySelector("#to-dos-left").appendChild(paragraph)


    // Promazání odstavců s úkoly
    document.querySelector("#results-todos").innerHTML = ""

    // Vypsání úkolů na stránku podle vyhledávání
    ourResult.forEach(function(oneResult){
        let paragraph = document.createElement("p")
        paragraph.textContent = oneResult.text
        document.querySelector("#results-todos").appendChild(paragraph)
    })

}


// Načítáme text z políčka
let searchText = document.querySelector("#search-text")
searchText.addEventListener("input", function(event){
    filters.searchingText = event.target.value

    // Voláme filtrovací funkci
    renderToDos(myToDos, filters)
})





