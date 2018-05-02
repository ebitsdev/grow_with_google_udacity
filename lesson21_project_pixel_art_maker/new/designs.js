$(function () {
    makeGrid();
});
var table = document.getElementById("pixelCanvas");
function makeTable(table, tr, td) {
    // Find a <table> element with id="myTable":

    // Create an empty <tr> element and add it to the 1st position of the table:

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:

    /* Create the table element using nested for loop */
    // table = $('<table/>', {
    //     class: 'table text-center table-bordered'
    // });
    /* Loop over the tr */
    for (let i = 0; i < tr; i++) {
        /* Create individual row */
        var row = table.tbody.insertRow(i);

        /* Loop over the td */
        for (let j = 0; j < td; j++) {
            /* Create individual cell */
            var cell1 = row.insertCell(i);
            // var cell1 = row.insertCell(j);
            /* Append the cell to the row */

            /* Set the cell color using jQuery .css() */
            // cell1.on('click', function () {
            //     this.css('background-color', $('#colorPicker').val());
            // });
        }
        /* Append the row element to the table */
        table.append(row);
    }
    //return table
}

function makeGrid() {
    /* Use .submit() event to dynamically generate the table */
    $('#sizePicker').submit(function (event) {
        /* Get the values of the input fields to use in generating the grid */
        let tr = $('#inputHeight').val();
        let td = $('#inputWidth').val();
        /* Prevent default behavior of submit */
        event.preventDefault();
        /* Use Bootstrap color picker */
        $('#colorPicker').colorpicker({
            "color": "dodgerblue"
        });
        /* Generate the grid by calling jQuery .html() and the makeTable() function */
        $('#pixelCanvas').html(makeTable(table, tr, td));
    }).submit(); /* Invoke submit() immediately */
}
/* Call makeGrid() when the document is ready */

/**
 * ==================
 * Notes
 * ==================
 *
 * In this project I learned how to dynamically generate a grid (table) of any size using for loop
 * Used jQuery event listeners to set the clicked cell color
 * Used Bootstrap framework to style the form elements and other html component on the page
 * **/
