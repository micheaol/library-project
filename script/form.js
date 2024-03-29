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
const submitBtn = document.querySelector('#submit-btn');
const removeBookFormDiv = document.querySelector('#remove-form-container');
const removeBookBtn = document.querySelector('#remove-book-btn');
const removeKey = document.querySelector('#remove-key');
const removeBookInnerForm = document.querySelector('#remove-book-form');
const closeBookFormBtn = document.querySelector('#close-book-btn')



// Library array for the object:
let myLabrary = [];

// ============Create book object================:
function Book(title, pages, author) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.isRead = true;
    this.bookInfo = function() {
        return  `${title}, ${author}, ${pages}, ${isRead}`
    }
}

// ============End of book object================:

// =======================================Event listeners=============================================
// Add event listerner to the form:
form.addEventListener('submit', submitForm);


// Event of submit button to close form after it has been submitted
cancelBtn.addEventListener('click', closeForm);


// Add event listener to the remove button:
removeBtns.forEach((removeBtn)=>{
    removeBtn.addEventListener('click', removeBookForm);
});

// add event listener to the window:
addBookBtn.addEventListener('click', clickForm);
submitBtn.addEventListener('click', closeSubmitted);

//Event to remove book from local storage:
removeBookBtn.addEventListener('click', removeBookFromLocal);

//Event to close remove book form:
closeBookFormBtn.addEventListener('click', closeRemoveBookForm)
// =======================================End of Event listeners=============================================
// =======================================Functions=======================================================

// Function to close form after it has been submitted:
function closeSubmitted(e) {
    if(e.target === submitBtn && bookTitle.value !== "" && bookAuthor.value !== "" && pages.value !== ""){
        formContainer.style.display = 'none'
    }else{
        displayData()
    }
}
// ===========================Close form funtion:
function closeForm(e) {
    if (e.target === cancelBtn) {
        formContainer.style.display = 'none'
    }
}

// =========================Function for clicking form:
function clickForm(e) {
   // displayBookBoard.innerHTML = "" // Clear the screen whenever you need to add more books
    if (e.target === addBookBtn) {
        formContainer.style.display = 'block'
    }
   

}

// ======================Remove book funtion:


// ===========Function Grab Submit form data from UI and push data to the array of books:==========
function submitForm(e) {
    e.preventDefault();
    
    let newBook = new Book(bookTitle.value, bookPages.value, bookAuthor.value);
    newBook.isRead = isChecked.checked;
    myLabrary.push(newBook);
    saveBookToLocal(bookTitle.value);
    // displayData();
    // remoFromLocal();
    form.reset();
}

// ===================================Save data to local storage ==============================
function saveBookToLocal() {
    const key = bookTitle.value.toLowerCase();
    localStorage.setItem(key, JSON.stringify(myLabrary));
    location.reload();
    
}



function removeBookForm(e) {
    // e.target.parentNode.parentNode.remove();
    removeBookFormDiv.style.display = 'block'
}

function closeRemoveBookForm() {
    removeBookFormDiv.style.display = 'none'
}

function removeBookFromLocal() {
    let key = removeKey.value.toLowerCase();
    if(key){
        localStorage.removeItem(key);
        removeBookFormDiv.style.display = 'none';
        location.reload();
    }else{
        const error = document.createElement('h3');
        error.textContent = "Please enter the book name to reamove";
        error.style.color = 'red';
        removeBookInnerForm.insertBefore(error, removeBookBtn);
    }
}


//============Function to get infomation from local storage and load it to 
// ===============the UI
function getBookFromLocal() {
    for(key in localStorage){
        const dataFromLocal = JSON.parse(localStorage.getItem(key));
        if(dataFromLocal){
            dataFromLocal.forEach(book => {
             let bookDiv = document.createElement('div');
             bookDiv.classList.add("book", "book-one");
             let titleDiv = document.createElement('div');
             titleDiv.id = "book-title";
             let titleH2 = document.createElement('h2');
             titleH2.textContent = book.title;
             let para = document.createElement('p');
             para.textContent = "Written by:";
             let authorName = document.createElement('h3');
             authorName.textContent = book.author;
             let bookDetailDiv = document.createElement('div');
             bookDetailDiv.id ="book-detail-div";
             let isReadPara = document.createElement('p');
             if (book.isRead) {
                 isReadPara.textContent = `Have you read it? Yes`;
             }else{
                 isReadPara.textContent = `Have you read it? No`;
             }
             let pagesPara = document.createElement('p');
             pagesPara.textContent = `Number of pages: ${book.pages}`;
             let removBtn = document.createElement('button');
             removBtn.type = "submit";
             removBtn.setAttribute('id', 'remove-btn');
             removBtn.classList.add('remove-btn');
             removBtn.key = book.title;
             removBtn.textContent = "Remove book";
             removBtn.addEventListener('click', removeBookForm);
     
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
     
             displayBookBoard.prepend(bookDiv);
            });
    }
   
    }

}


getBookFromLocal()

// =======================================End of Functions=============================================