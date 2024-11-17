console.log("himanshu")
function newNote(nTitle, note) {
    let html = ` <div class="cards">
            <img src="bluebg.jpg" alt=""></img>
            <div class="card1 note" id ="card"><h3>${nTitle}</h3><p>${note}</p></div>
        
        </div>`
    document.querySelector(".cardCon").innerHTML = document.querySelector(".cardCon").innerHTML + html
}
newNote("test Title","test notes")