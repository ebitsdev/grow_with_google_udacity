// Inspiration from: https://stackoverflow.com/questions/16001685/manipulate-css-with-the-html5-color-input
function makeTable(table, tr, td){
    /* Create the table element */
    table = $('<table/>');
    /* Loop over the tr */
    for (let i = 0; i < tr; i++){
         /* Create individual row */
        let row = $('<tr/>');
        /* Loop over the td */
        for(let j = 0; j < td; j++){
            /* Create individual cell */
            let cell = $('<td/>');
            /* Append the cell to the row */
            row.append(cell);
            /* Set the cell color using jQuery .css() */
            cell.on('click', function(){
                cell.css('background-color', $('#colorPicker').val());
            });
        }
        /* Append the row element to the table */
        table.append(row);
    }
    return table;
}

function makeGrid(){
    $('#sizePicker').submit(function(event){
        /* Get the values of the input fields to use in generating the grid */
        let tr = $('#inputHeight').val();
        let td = $('#inputWidth').val();
        event.preventDefault();
        /* Generate the grid by calling jQuery .html() and the makeTable() function */
        $('#pixelCanvas').html(makeTable(null, tr, td));
    }).submit(); /* To invoke makeGrid by calling submit() immediately */
}
/* To automatically call the makeGrid function when the document is ready */

$(function() {
    /* Call makeGrid on document ready */
    makeGrid();
});
/** More comments */