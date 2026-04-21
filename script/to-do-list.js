"use strict"


const input = document.getElementById("input");
const list = document.getElementById("list");
const ul = document.querySelector('ul');
const progressBar = document.querySelector(".progressBar");


// get value from input 
// if click enter with input it will submit the value
input.addEventListener('keypress', function (e) {

    if(e.key === "Enter"){
        const newli = document.createElement('li');
        newli.textContent = input.value;
        newli.classList.add("liStyles")
        list.appendChild(newli);
    }

   
})

//if click give it a line across it and fill progress bar 

 ul.addEventListener('click', function (e) {
    const liItem = e.target.closest('li')
    if(liItem.tagName === 'LI') {
        liItem.classList.toggle("strikeThrew")

    }
})






// add it to a li element 
// if li is clicked cross it out
// if crossed out progress bar incresses