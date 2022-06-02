
const container = document.querySelector('#container');
const squareContainer = document.querySelector(".squareContainer")

let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let Clickbtn = document.getElementById("clickbtn")
//Clickbtn.addEventListener("click", numofsqs )


 
// Creates a default grid sized 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

function makeGrid(rownum, colnum){
    makeRows(rownum)
    makeColumns(colnum)
}




function makeRows (rowNum){
    for (let i =1; i <=rowNum; i++){
        let row = document.createElement("div");
        squareContainer.appendChild(row).className = "gridRow";
    }
}


function makeColumns(cellNum) {
    for (let col = 0; col < cellNum; col++){
        for (let i = 0; i < cellNum; i++) {
           let newcell = document.createElement("div") 
           rows[i].appendChild(newcell).className = "cell"
        }
    }
}



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

function numofsqs (){
    removeBorder()
    let rownumber = Number(window.prompt("How many rows of squares do you want? "))
    let colnumber = Number(window.prompt("How many columns of squares do you want? "))
    if (rownumber > 100 || colnumber > 100 ){
        alert("Hey That's too much :(")
    }
    //showBorder()
    makeGrid(rownumber,colnumber)
    mouseOn()
    mouseOut()
    
      
}
function removeBorder() {       
    while (squareContainer.firstChild) {
        squareContainer.removeChild(squareContainer.firstChild)
      }                                          
}

function showBorder() {                       
    squareContainer.append(rows)                               
}


defaultGrid()
//makeGrid(0,0)
//removeBorder()
Clickbtn.addEventListener("click", numofsqs)
mouseOn()
mouseOut()
//makeRows(32)
//makeColumns(32)
//removeBorder()
//makeGrid(20,20)







