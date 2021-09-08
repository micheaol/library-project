 // For Firebase JS SDK v7.20.0 and later, measurementId is optional 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
 import {getAuth} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js";
 import {getFirestore, collection} from 'firebase/firestore';

 const firebaseConfig = {
   apiKey: "AIzaSyCpLAANxssBVFAs5On-T2sILAIpffuVjMw",
   authDomain: "library-88a49.firebaseapp.com",
   projectId: "library-88a49",
   storageBucket: "library-88a49.appspot.com",
   messagingSenderId: "783337650848",
   appId: "1:783337650848:web:af20791ba26805025127c5",
   measurementId: "G-S9Q8PJYD09"
 };

 // Initialize Firebase============================
 const db = getFirestore(firebaseConfig)

// Create library reference in the firebase:
var libraryRef = collection(db, 'books')



form.addEventListener('submit', submitToFirebase);
// ==================Function submiting to firebase back-end ===================================
function submitToFirebase() {
    e.preventDefault();
    title = bookTitle.value;
    pages = bookPages.value;
    author = bookAuthor.value;
    isRead = isChecked.checked;

    // Save data to firebase
    saveToFirebase(title, pages, author, isRead);
    form.reset();
}
// ==================Function submiting to firebase back-end ===================================

// =====================Function to save form to firebase==========================================
function saveToFirebase(title, pages, author, isRead) {
    var newLibraryRef = libraryRef.push();
    newLibraryRef.set({
        title: title,
        pages:pages,
        author: author,
        isRead: isRead
    });

    
}

// =====================Function to save form to firebase==========================================


























// Create variable for the form container:
const form = document.querySelector('form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
let isChecked = document.querySelector('#read');
