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
    console.log(e.target)
}

// ===========Function Grab Submit form data from UI and push data to the array of books:==========
function submitForm(e) {
    e.preventDefault();
    let newBook = new Book(bookTitle.value, bookPages.value, bookAuthor.value, isRead.checked);
    myLabrary.push(newBook);
    form.reset();
    // console.log(myLabrary)
}

// ===========End of the Function Grab Submit form data from UI and push data to the array of books:=========

//=================== Function to send my Library array to the UI================================//
function displayData(array, title, author, pages, isRead) {
        array = myLabrary;
        title = newBook.title;
        author = newBook.author;
        pages = newBook.pages;
        isRead = newBook.isRead;
    for(let counter = 0; counter < myLabrary.length; counter++){
        let bookDiv = document.createElement('div');
        bookDiv.classList.add("book", "book-one");
        let titleDiv = document.createElement('div');
        titleDiv.id = "book-title";
        let titleH2 = document.createElement('h3');
        titleH2.textContent = title;
        let para = document.createElement('p');
        para.textContent = "Written by:";
        let authorName = document.createElement('h3');
        authorName.textContent = author;
        let bookDetailDiv = document.createElement('div');
        bookDetailDiv.id ="book-detail-div";
        let isReadPara = document.createElement('p');
        isReadPara.textContent = `Have you read it? ${isRead}`;
        let pagesPara = document.createElement('p');
        pagesPara.textContent = `Number of pages: ${pages}`;
        let removBtn = document.createElement('button');
        removBtn.type = "submit";
        removBtn.id = 'remove-btn';
        removBtn.textContent = "Remove book";

        // Append children to first div
        titleDiv.appendChild(titleH2);
        titleDiv.appendChild(para);
        titleDiv.appendChild(authorName);

         //Append childre to the second children
        bookDetailDiv.appendChild(isReadPara);
        bookDetailDiv.appendChild(pagesPara);
        bookDetailDiv.appendChild(removBtn);

        // Append the divs to the parent div
        bookDiv.appendChild(titleDiv);
        bookDiv.appendChild(bookDetailDiv);

        displayBookBoard.appendChild(bookDiv);
        console.log(bookDiv)
    }
}
displayData()
//=================== Function to send my Library array to the UI================================//
