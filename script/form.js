// Create variable for the form container:
const formContainer = document.querySelector('#form-container');
const addBookBtn = document.querySelector('.add-book img');
const cancelBtn = document.querySelector('#cancel-btn');
const removeBtns = document.querySelectorAll('#remove-btn');
const bookCard = document.querySelector('.book');




// Add event listener to the remove button:
removeBtns.forEach((removeBtn)=>{
    removeBtn.addEventListener('click', removeBook);
});

// add event listener to the window:
window.addEventListener('click', clickForm);
cancelBtn.addEventListener('click', closeForm);



// Close form funtion:
function closeForm(e) {
    if (e.target === cancelBtn) {
        formContainer.style.display = 'none'
    }
}

// Function for clicking form:
function clickForm(e) {
    if (e.target === addBookBtn) {
        formContainer.style.display = 'block'
    }
}

// Remove book funtion:
function removeBook(e) {
    e.target.parentNode.parentNode.remove();
}