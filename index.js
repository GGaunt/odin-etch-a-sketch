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
        let square = `<div class="square" style="width:${squareSize}px;height:${squareSize}px">${i}</div>`;
        output = output + square;
        
    }

    document.getElementById("sketchpad").innerHTML = output;
}

createSketchpadBase(16)

function createSketchpad(){
    let gridInput = document.getElementById("gridInput").value;
    console.log("gridInput",gridInput);
    createSketchpadBase(gridInput);
}