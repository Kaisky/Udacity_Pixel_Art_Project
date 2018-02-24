const pickColor = $("#colorPicker");
const gridHeight = $("#inputHeight");
const gridWidth = $("#inputWidth");
const grid = $("#pixelCanvas");
const sizePicker = $("#sizePicker");



//Event Listener that passes the selected width and height and calls makeGrid
sizePicker.submit(function(event) {
    event.preventDefault();
    makeGrid();
});

//Event Listener that Deletes the Grid  on "Delete Canvas" button click
$("#deleteGrid").click(removeGrid);

//clea clears the grid content
$("#clearGrid").click(clearGrid);

//Deletes the Grid  on "Delete Canvas" button click
grid.on("click",".tableCell", function () {
    colorFull($(this));//Event Listener that callbacks colorFull on click
});

// makeGrid creates the grid from the passed height and Width
function makeGrid() {
    removeGrid();
    let rows = gridHeight.val();
    let columns = gridWidth.val();
    //Add Row to the Table
    for (let addRow = 0; addRow < rows; addRow++) {
        grid.append('<tr class="tableRow">');
    };
    //Add column to the table
    for (let addColumn = 0; addColumn < columns; addColumn++) {
        $("tr").each(function() {
            $(this).append('<td class="tableCell">');
    });
    }
}

//removeGrid Resets the grid function
function removeGrid() {
    grid.empty();
}
function clearGrid() {
    $('td').css("background-color","white")
}

//colorFull Adds background color to the selected element
function colorFull(element) {
    let color =  pickColor.val();
    $(element).css("background-color",color);
}
