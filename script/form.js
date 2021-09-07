// Create variable for the form container:
const formContainer = document.querySelector('#form-container');
const addBookBtn = document.querySelector('.add-book img');
const cancelBtn = document.querySelector('#cancel-btn');
const removeBtns = document.querySelectorAll('#remove-btn'); //Id for removing the buttons
const bookCard = document.querySelector('.book');
const form = document.querySelector('form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
let isChecked = document.querySelector('#read');
const displayBookBoard = document.querySelector('.display-books');



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

// Add event listerner to the form:
form.addEventListener('submit', submitForm);


// Add event listener to the remove button:
removeBtns.forEach((removeBtn)=>{
    removeBtn.addEventListener('click', removeBook);
});

// add event listener to the window:
addBookBtn.addEventListener('click', clickForm);
cancelBtn.addEventListener('click', closeForm);


// Close form funtion:
function closeForm(e) {
    if (e.target === cancelBtn) {
        formContainer.style.display = 'none'
    }
}

// Function for clicking form:
function clickForm(e) {
    displayBookBoard.innerHTML = "" // Clear the screen whenever you need to add more books
    
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
    
    let newBook = new Book(title, pages, bookAuthor, isChecked);
   
    newBook.title = bookTitle.value;
    newBook.pages = bookPages.value;
    newBook.author = bookAuthor.value;
    newBook.isChecked = isChecked.checked;

    
    myLabrary.push(newBook);
    displayData();
    

    form.reset();
    // return myLabrary
    
}
// console.log(` Checking outside: ${myLabrary}`)
// ===========End of the Function Grab Submit form data from UI and push data to the array of books:=========

//=================== Function to send my Library array to the UI================================//
function displayData() {
    myLabrary.forEach((book)=>{
        title = book.title;
        author = book.author;
        pages = book.pages;
        isChecked = book.isRead;

        let bookDiv = document.createElement('div');
        bookDiv.classList.add("book", "book-one");
        let titleDiv = document.createElement('div');
        titleDiv.id = "book-title";
        let titleH2 = document.createElement('h2');
        titleH2.textContent = title;
        let para = document.createElement('p');
        para.textContent = "Written by:";
        let authorName = document.createElement('h3');
        authorName.textContent = author;
        let bookDetailDiv = document.createElement('div');
        bookDetailDiv.id ="book-detail-div";
        let isReadPara = document.createElement('p');
        if (isChecked.checked) {
            isReadPara.textContent = `Have you read it? Yes`;
        }else{
            isReadPara.textContent = `Have you read it? No`;
        }
        let pagesPara = document.createElement('p');
        pagesPara.textContent = `Number of pages: ${pages}`;
        let removBtn = document.createElement('button');
        removBtn.type = "submit";
        removBtn.setAttribute('id', 'remove-btn');
        removBtn.classList.add('remove-btn');
        removBtn.textContent = "Remove book";
        removBtn.addEventListener('click', removeBook);

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
    });

}
displayData()
//=================== Function to send my Library array to the UI================================//

