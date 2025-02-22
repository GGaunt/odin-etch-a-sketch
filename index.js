const sketchpadSize = 960;


// example gridsize 4 
// example squaresize ? 


// example gridsize 10 
// example squaresize ? 

function createSketchpadBase(gridSize) {
    let output = "";

    let squareSize = sketchpadSize / gridSize;
    console.log(`calculated square size using ${sketchpadSize} / ${gridSize} = ${squareSize}px`);
    let squareNumber = gridSize * gridSize;
    console.log(`calculated number of squares to be ${squareNumber} by multiplying gridsize by itself (${gridSize} * ${gridSize})`);



    for (let i = 1; i <= squareNumber; i++) {
        let square = `<div id="square${i}" class="square" onmouseover="hoverSquare(this)" style="width:${squareSize}px;height:${squareSize}px"></div>`;
        output = output + square;
        
    }

    document.getElementById("sketchpad").innerHTML = output;
}

createSketchpadBase(16)

// TO DO: check input is whole number return a prompt if not

function createSketchpad(){
    let gridInput = document.getElementById("gridInput").value;
    console.log("gridInput",gridInput);
    if (gridInput > 100 || gridInput < 1){
        alert("Choose sketchpad size a whole number between 1 - 100)")
        return 
    }
    createSketchpadBase(gridInput);
}

// element.addEventListener("click", hoverSquares);

function hoverSquare(square){
    console.log(square);
    square.className = "square filled"
}