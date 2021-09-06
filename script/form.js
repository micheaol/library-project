// Create variable for the form container:
const formContainer = document.querySelector('#form-container');
const addBookBtn = document.querySelector('.add-book img');
const cancelBtn = document.querySelector('#cancel-btn');
const removeBtns = document.querySelectorAll('#remove-btn');
const bookCard = document.querySelector('.book');
const form = document.querySelector('form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const isRead = document.querySelector('#read');



// Library array for the object:
let myLabrary = [];

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


// TESTING ARRAY PUSH===============================
let newBook = new Book("Holy Ghost", 200, "Michael", true);
let secondBook = new Book("Blood of Jesus", 200, "Oladele", false);
myLabrary.push(newBook);
myLabrary.push(secondBook);

console.log(myLabrary);
console.log(secondBook.bookInfo())
// TESTING ARRAY PUSH===============================

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
   console.log(bookAuthor.value);
   console.log(bookTitle.value);
   console.log(bookPages.value);
   console.log(isRead.checked)
}