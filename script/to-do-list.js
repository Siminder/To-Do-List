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



// displaying the current date function 
function currentDate() {
    const date = document.getElementById('dateBox');

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];

    let d = new Date();
    let month  = d.getMonth(); 
    let day = d.getDay();
    
    // loop threw the months array and then compare the number value wiht the current month number 
    // if they match display the current month of that number
   
    let newH3 = document.createElement('h3');
    let newP = document.createElement('p');
    let newH4 = document.createElement('h4');
    newH4.textContent = d.getDate();
    newH3.textContent = days[day];
    newP.textContent = months[month];
    date.appendChild(newH3);
    date.appendChild(newH4)
    date.appendChild(newP);
    
     

}


currentDate();