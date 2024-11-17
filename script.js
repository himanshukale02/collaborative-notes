// Selecting popup element
let popup = document.getElementById('pop');

// Function to open the popup
function openPopup() {
    popup.style.display = "flex"; // Show the popup
}

// Function to close the popup
function closePopup() {
    popup.style.display = "none"; // Hide the popup
}

// Function to add a new note
function newNote() {
    const titleInput = document.getElementById('ttl'); // Title input
    const noteInput = document.querySelector('input[name="noteC"]'); // Note input

    // Get input values
    const nTitle = titleInput.value.trim();
    const note = noteInput.value.trim();

    // Add the new note only if inputs are not empty
    if (nTitle && note) {
        let html = `
            <div class="cards">
                <img src="bluebg.jpg" alt=""></img>
                <div class="card1 note" id="card">
                    <h3>${nTitle}</h3>
                    <p>${note}</p>
                </div>
            </div>`;
        
        // Add the new note to the card container
        document.querySelector(".cardCon").innerHTML += html;

        // Clear inputs
        titleInput.value = "";
        noteInput.value = "";

        // Close the popup
        closePopup();
    } else {
        alert("Please fill in both the title and note content!");
    }
}
