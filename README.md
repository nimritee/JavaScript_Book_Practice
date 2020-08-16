# JavaScript_Book_Practice

## Basic ways to handle DOM elements
1. documnet.getElementById('wrapper); -> returns the element
2. document.getElmentsByClassName('title') ->returns a HTML Collection 
3. document.getElementsByTag('li') -> return  a HTML Collection 
4. document.querySelector('#wrapper') -> returns the first elemnt found or the specified element
5. document.querySelectorAll('#book-list li .name') -> returns a list of element

## Array functions in JavaScript
1. Array.isArray() -> returns wherether the element passed is an array or not.
2. Array.from() -> creates an array from an array like element or list.
3. Array.forEach(function)

### Array.from() Examples

1. Array.from('foo') ->['f','o','o']
2. Array.from([1,2,3],x=>x+x) -> [2,4,6]

### Array.forEach() Example

Array.from(lis).forEach(function(item){
    console.log(item)
})

### QuerySelector
 1. id -> #
 2. class -> .
 3. li -> li
 4. nth-child -> li:nth-child(2)

 const wfm= document.querySelector('#book-list li:nth-child(2) .name') -> 2nd element
 const wfm= document.querySelector('#book-list li .name') -> 2nd element -> 1st element not all
 var bookslist = document.querySelector('#book-list li .name') -> all the elements