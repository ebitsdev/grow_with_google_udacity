// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid(h, w){
        $("#subutton").on('click', function(){
       $('#inputHeight').val(h);
       $('#inputWidth').val(w);

return h, w;
});
}
function tbElements(table, rows, cells, content) {
    var table = $('<table />');
    //  $('#inputHeight').val(''),
    //  $('#inputWidth').val('');

        for (let i = 0; i < rows; i++) {
            // Create the table row
            let row = $('<tr/>');
            for (let j = 0; j < cells; j++) {
                // Create the table cell data
                rowData = $('<td></td>').text(content);
                row.append(rowData);
            }
            $('#inputHeight').on('focus', function(){

            });
            // Append (add) table row(s) to the table element in the body
            table.append(row);
            console.log(rows, cells);
        }
        return table;

}

// Call above function tbElements on the #pixelCanvas table
$("#pixelCanvas").append(tbElements(null, "text", makeGrid(3,3)));

// function makeGrid() {
//     let mySubmit = $("input[type=submit]"),
//         newTable = $('<table id="mytable"></table>'),
//         tHead = $("<thead></thead>"),
//         tBody = $("<tbody></tbody>"),
//         myTable = $("#pixelCanvas"),
//         myColorPicker = $("#colorPicker"),
//         inputwidth = $("#inputWight"),
//         inputheight = $("#inputHeight"),
//         widthVal = $("#inputWight").val(),
//         heightVal = $("#inputHeight").val(),
//         myColor = $("#colorPicker").text();
//         myTable.append(tHead);
//         tBody.insertAfter(tHead),
//         row = $("<tr></tr>"),
//         col = $("<td></td>");
//     for (var i = 0; i < 5; i++) {
//         // document.getElementsByName("mytable");
//         for (var y = 0; y < 5; ++y) {
//             tBody.append(row[i]);
//             row.append(col[i][y]);
//             // row.append(col[y]);
//         }
//     }
// }
// $(function () {
//     makeGrid();
// });

(function () {
    for (var i = 0; i < 10; i++) {
        // console.log("one: " + i);
    }
    // console.log("two: " + i);
})();
// Intro to closures
function makeFunc() {
    var name = "Emmanuel";

    function showName() { // The closure function, which is the function that is enclosed in the outer function
        return name;
    }
    showName();
}
makeFunc()
/**
 * Closures
 */
function myClosure() {
    var myname = "Emmanuel Bamba";

    function displayName() {
        return myname;
    }
    return displayName;
}
var myFunc = myClosure();
// console.log(myFunc());

/**
 * Another example of closures
 */
function testFunc() {
    function myNewClosure() { // Closure function
        for (let i = 0; i < 10; i++) {
            console.log("From inside the closure: " + i);
        }
    }
    return myNewClosure; // Return the function before running it
}
/**
 * In essence, adder is a function factory — it creates functions which can add a specific value to their argument.
 */
function adder(x) {
    return function (y) {
        return x + y;
    };
}
var addfive = adder(2),
    addten = adder(10);
// console.log("Add five: " + addfive(5));
// console.log("Add ten: " + addten(2));

var test = testFunc();
// test();

function makeSizer(size) {
    return function () {
        document.body.style.fontSize = size + "px";
    };
}
var size12 = makeSizer(12),
    size14 = makeSizer(14);
document.getElementById("size12").onclick = size12;
document.getElementById("size14").onclick = size14;