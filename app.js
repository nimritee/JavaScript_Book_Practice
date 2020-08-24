var title = document.getElementsByClassName('title'); //This returns a HTMLCollection, similar to array but not an array.
var lis = document.getElementsByTagName('li');

Array.from(title).forEach(function(item){
     console.log(item)
})

Array.from(lis).forEach(function(item){
    console.log(item)
})

const wrap = document.querySelector('#wrapper')
console.log(wrap)

const wfm= document.querySelector('#book-list li:nth-child(2) .name')
console.log(wfm);

var bookslist = document.querySelector('#book-list li .name')
//console.log(bookslist)

bookslist = document.querySelectorAll('#book-list li .name')
console.log(bookslist)

Array.from(bookslist).forEach(function(item){
    console.log(item);
})

var books = document.querySelectorAll("#book-list li .name");
books.forEach(function(book){
    console.log(book.textContent);
});


var books = document.querySelectorAll("#book-list li .name");
books.forEach(function(book){
    if(book.textContent === "Name of the Wind")
        book.textContent +="test";
});

// const bookList = document.querySelector("#book-list");
// console.log(bookList.innerHTML);

const bookList = document.querySelector("#book-list");
bookList.innerHTML = '<h2> books and more </h2>';