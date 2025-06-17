const birthdayEl = document.getElementById("birthday");
const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");


function calculateAge(){
    const birthdayValue = birthdayEl.value;

    if(birthdayValue === "") {
        alert('Please enter your birthday')
    }
    else {
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} ${age === 1 ? "year" : "years"} old`;
    }
}

function getAge(){
    
}