const container = document.querySelector('#container');
const squareContainer = document.querySelector(".squareContainer")

let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");



// Creates a default grid sized 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}


function makeRows (rowNum){
    for (i =0; i< rowNum; i++){
        let row = document.createElement("div");
        squareContainer.appendChild(row).className = "gridRow";
    }
}


function makeColumns(cellNum) {
    for (col = 0; col < rows.length; col++){
     for (i= 0; i < cellNum; i++){
     let newcell = document.createElement("div");
     rows[i].appendChild(newcell).className = "cell"
     }
    }
};


function bgcolor (cell) {
    cell.style.backgroundColor = 'yellow'
}

function nocolor (cell) {
    cell.style.backgroundColor = ''
 }

function mouseOn() {
    for (let cell of cells ) {
        cell.addEventListener("mouseover", function () {bgcolor(cell)}) 
    }
}


function mouseOut() {
    for (let row of rows ) {
        row.addEventListener("mouseout", function() {nocolor(cell)}) 
    }
}



defaultGrid()
mouseOn()
mouseOut()




