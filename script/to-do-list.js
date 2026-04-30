"use strict"


const input = document.getElementById("input");
const list = document.getElementById("list");
const ul = document.querySelector('ul');
const progressBar = document.querySelector(".progress");



// get value from input 
// if click enter with input it will submit the value
input.addEventListener('keypress', function (e) {

    if(e.key === "Enter"){
        const newli = document.createElement('li');
        newli.textContent = input.value;
        newli.classList.add("liStyles")
        list.appendChild(newli);
        resetProgress();
    }

   
})

//if click give it a line across it and fill progress bar 

 ul.addEventListener('click', function (e) {
    const liItem = e.target.closest('li')
    if(liItem && liItem.tagName === 'LI') {
        liItem.classList.toggle("strikeThrew")



        updateProgressBar();
    }

  
    
    
    
})


function updateProgressBar() {
    const tasks = document.querySelectorAll('#list li');
    const completed = document.querySelectorAll('#list li.strikeThrew')

    const percent = tasks.length === 0 ? 0 : (completed.length / tasks.length) * 100;

    progressBar.style.width = percent + "%";
    
}



function resetProgress() {
    const tasks = document.querySelectorAll('#list li')
    tasks.forEach(tasks => tasks.classList.remove('strikeThrew'));

    progressBar.style.width = '0%';


}

// add it to a li element 
// if li is clicked cross it out
// if crossed out progress bar incresses