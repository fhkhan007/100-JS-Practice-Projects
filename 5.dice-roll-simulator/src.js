// const buttonEl = document.getElementById("roll-button");

// const diceEl = document.getElementById("dice");

// const rollHistoryEl = document.getElementById("roll-history");

// let historyList = [];

// function rollDice() {
//   const rollResult = Math.floor(Math.random() * 6) + 1;
//   const diceFace = getDiceFace(rollResult);
//   diceEl.textContent = diceFace;
//   historyList.push(rollResult);
//   updateRollHistory();
// }

// function updateRollHistory() {
//   rollHistoryEl.textContent = "";
//   for (let i = 0; i < historyList.length; i++) {
//     const listItem = document.createElement("li");

//     // Combine string + dice char
//     listItem.textContent = `Roll ${i + 1}: ${getDiceFace(historyList[i])}`;
    
//     rollHistoryEl.appendChild(listItem);
//   }
// }

// // function updateRollHistory() {
// //   rollHistoryEl.textContent = "";
// //   for (let i = 0; i < historyList.length; i++) {
// //     const listItem = document.createElement("li");
// //     listItem.textContent = `Roll ${i + 1}: `;

// //     const span = document.createElement("span");
// //     span.textContent = getDiceFace(historyList[i]); // dice symbol
// //     listItem.appendChild(span);

// //     rollHistoryEl.appendChild(listItem);
// //   }
// // }


// function getDiceFace(rollResult) {
//   switch (rollResult) {
//     case 1: return "\u2680"; // ⚀
//     case 2: return "\u2681"; // ⚁
//     case 3: return "\u2682"; // ⚂
//     case 4: return "\u2683"; // ⚃
//     case 5: return "\u2684"; // ⚄
//     case 6: return "\u2685"; // ⚅
//     default: return "";
//   }
// }


// buttonEl.addEventListener("click", () => {
//   buttonEl.disabled = true;
//   diceEl.classList.add("roll-animation");

//   setTimeout(() => {
//     diceEl.classList.remove("roll-animation");
//     rollDice();
//     buttonEl.disabled = false;
//   }, 1000);
// });

document.addEventListener("DOMContentLoaded", () => {
  const buttonEl = document.getElementById("roll-button");
  const diceEl = document.getElementById("dice");
  const rollHistoryEl = document.getElementById("roll-history");

  // Check for missing elements
  if (!buttonEl) {
    console.error("Button with ID 'roll-button' not found in the DOM");
    return;
  }
  if (!diceEl) {
    console.error("Dice element with ID 'dice' not found in the DOM");
    return;
  }
  if (!rollHistoryEl) {
    console.error("Roll history element with ID 'roll-history' not found in the DOM");
    return;
  }

  let historyList = [];

  function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    console.log("Roll result:", rollResult, "Dice face:", diceFace);
    diceEl.textContent = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
  }

  function updateRollHistory() {
    rollHistoryEl.innerHTML = ""; // Changed from textContent to innerHTML for safety
    for (let i = 0; i < historyList.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `Roll ${i + 1}: `;
      const span = document.createElement("span");
      span.textContent = getDiceFace(historyList[i]);
      listItem.appendChild(span);
      rollHistoryEl.appendChild(listItem);
    }
  }

  function getDiceFace(rollResult) {
    switch (rollResult) {
      case 1: return "\u2680"; // ⚀
      case 2: return "\u2681"; // ⚁
      case 3: return "\u2682"; // ⚂
      case 4: return "\u2683"; // ⚃
      case 5: return "\u2684"; // ⚄
      case 6: return "\u2685"; // ⚅
      default: return "";
    }
  }

  buttonEl.addEventListener("click", () => {
    console.log("Button clicked");
    buttonEl.disabled = true;
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
      console.log("Animation complete");
      diceEl.classList.remove("roll-animation");
      rollDice();
      buttonEl.disabled = false;
    }, 1000);
  });
});