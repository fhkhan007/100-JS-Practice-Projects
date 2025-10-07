// Get references to DOM elements
const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");
const timeEl = document.getElementById("time");

// Function to update calendar and clock
function updateDateTime() {
  const now = new Date();

  // Month name (e.g. April)
  monthNameEl.innerText = now.toLocaleString("en", { month: "long" });

  // Weekday name (e.g. Friday)
  dayNameEl.innerText = now.toLocaleString("en", { weekday: "long" });

  // Day number (e.g. 20)
  dayNumEl.innerText = now.getDate();

  // Year (e.g. 2025)
  yearEl.innerText = now.getFullYear();

  // Time (e.g. 10:35:07 AM)
  timeEl.innerText = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

// Run immediately and then update every second
updateDateTime();
setInterval(updateDateTime, 1000);
