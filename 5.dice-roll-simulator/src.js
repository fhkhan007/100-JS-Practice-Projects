const buttonEl1 = document.getElementById('roll-button');

const diceEl1 = document.getElementById('dice');

const rollHistoryEl1 = document.getElementById('roll-history');

let historyList = [];

function rollDice(){
    const rollResult = Math.floor(Math.random() * 6 ) + 1 ;
    const diceFace = getDiceFace(rollResult);
    diceEl1.textContent = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

function updateRollHistory(){
    rollHistoryEl1.textContent = "" ;
    for(let i = 0; i<historyList.length; i++) {
        const listItem = document.createElement("li");
    }
}

