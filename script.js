// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10)
let intervalId = null;

// Selecting DOM elements
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Modify Content on Load ---
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
function highlightListItems() {
  const items = document.querySelectorAll("li"); // gets all <li> elements

  items.forEach(function(item) {
    item.style.color = "blue"; // change text color
  });
}

// Run on page load
highlightListItems();

/* ======================================= */
// --- Task 8: Create Timestamp ---
function createTimestamp() {
  const span = document.createElement("span"); // create new span
  span.innerHTML = " " + new Date().toLocaleTimeString(); // current time
  statusOutput.appendChild(span); // add to status div
}

/* ======================================= */
// --- Tasks 5, 6, 7: Toggle Function ---
function toggleStatus(e) {
  e.preventDefault(); // Task 6: prevent link behavior

  // Toggle visibility
  statusOutput.classList.toggle("hidden");

  // Check if visible
  if (!statusOutput.classList.contains("hidden")) {
    // Visible
    mainTitle.style.backgroundColor = "yellow"; // Task 7
    createTimestamp(); // Task 8
  } else {
    // Hidden
    mainTitle.style.backgroundColor = "";
  }
}

// Event listener for toggle
toggleButton.addEventListener("click", toggleStatus);

/* ======================================= */
// --- Task 10: Timed Animation ---
function startFlashing() {
  if (intervalId === null) {
    intervalId = setInterval(function() {
      controlPanel.classList.toggle("hidden");
    }, 500);
  }
}

function stopFlashing() {
  clearInterval(intervalId);
  intervalId = null;
  controlPanel.classList.remove("hidden"); // ensure it's visible after stopping
}

// Event listeners for timer button
timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);