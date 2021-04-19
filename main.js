let ageInput = document.querySelector('#ageInput');
let ageSubmit = document.querySelector('#ageSubmit');
let dateInput = document.querySelector('#dateInput');
let dateSubmit = document.querySelector('#dateSubmit');
const today = new Date();

ageSubmit.onclick = ()=> {
    if (ageInput.value){
        alert(`You were born on ${today.getFullYear() - Number(ageInput.value)}`)
    }
}


dateSubmit.onclick = ()=> {
    if (dateInput.value){
       alert(`Your age is ${today.getFullYear() - Number(dateInput.value.split('-')[0]) }`);
    }
}