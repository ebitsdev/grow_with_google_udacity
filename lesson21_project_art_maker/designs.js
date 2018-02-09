function makeTable(table, tr, td){
    /* Create the table element using nested for loop */
    table = $('<table/>', {class: 'table text-center table-bordered'});
    /* Loop over the tr */
    for (let i = 0; i < tr; i++){
         /* Create individual row */
        let row = $('<tr/>', {scope: 'row'});
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
    /* Use .submit() event to dynamically generate the table */
    $('#sizePicker').submit(function(event){
        /* Get the values of the input fields to use in generating the grid */
        let tr = $('#inputHeight').val();
        let td = $('#inputWidth').val();
        /* Prevent default behavior of submit */
        event.preventDefault();
        /* Use Bootstrap color picker */
        $('#colorPicker').colorpicker({"color": "dodgerblue"});
        /* Generate the grid by calling jQuery .html() and the makeTable() function */
        $('#pixelCanvas').html(makeTable(null, tr, td));
    }).submit(); /* Invoke submit() immediately */
}
/* Call makeGrid() when the document is ready */

$(function() {
    makeGrid();
});
/**
 * ==================
 * Notes
 * ==================
 *
 * In this project I learned how to dynamically generate a grid (table) of any size using for loop
 * Used jQuery event listeners to set the clicked cell color
 * Used Bootstrap framework to style the form elements and other html component on the page
 * **/