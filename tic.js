// Select restart button and all table cells
var restartb = document.querySelector('#b');
var cells = document.querySelectorAll('td');

// Function to clear all cells
function clearallcells() {
    for (let cell of cells) {
        cell.textContent = ''; // Corrected property name
    }
}

// Add event listener to Restart button
restartb.addEventListener('click', clearallcells);

// Function to toggle between X, O, and empty
function changecontent() {
    if (this.textContent === '') {
        this.textContent = 'X';
    } else if (this.textContent === 'X') {
        this.textContent = 'O';
    } else {
        this.textContent = '';
    }
}

// Add event listener to all cells
for (let cell of cells) {
    cell.addEventListener('click', changecontent);
}

// QUESTIONS;;
// TO CHANGE COLOR OF H1 ON SINGLE CLIICK OPERATION;;
var myh1=document.querySelector('h1')
myh1.addEventListener('click',changeColor);

