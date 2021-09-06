// Create variable for the form container:
const formContainer = document.querySelector('#form-container');
const addBookBtn = document.querySelector('.add-book img');
const cancelBtn = document.querySelector('#cancel-btn');
const removeBtns = document.querySelectorAll('#remove-btn');
const bookCard = document.querySelector('.book');
const form = document.querySelector('form');



// ============Create book object================:
function Book(title, pages, author, isRead) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.isRead = isRead;
    this.bookInfo = function() {
        return  `${title}, ${author}, ${pages}, ${isRead}`
    }
}

// ============Create book object================:




// Add event listerner to the form:
form.addEventListener('submit', submitForm);


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

// Submit form function:
function submitForm(e) {
    e.preventDefault();
   console.log(e)
}