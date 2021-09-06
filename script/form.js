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
const displayBookBoard = document.querySelector('.display-books')



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


// console.log(secondBook.bookInfo())
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



// Add function to display book on the page:
function displayBook(book) {
    
}

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

// ===========Function Grab Submit form data from UI and push data to the array of books:==========
function submitForm(e) {
    e.preventDefault();
    let newBook = new Book(bookTitle.value, bookPages.value, bookAuthor.value, isRead.checked);
    myLabrary.push(newBook);
    console.log(myLabrary);
}

// ===========End of the Function Grab Submit form data from UI and push data to the array of books:=========