


//Tracks and displays what day it is in header.
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

//Tracks what hour it currently is
var currentHour = moment().format("hh");

var timeColumn = $(".timeColumn")

console.log(timeColumn)
//
var currentTime = timeColumn[i]
console.log(currentTime)

// $('.timeColumn').each(funciton (i) {
//     if (this === currentHour) {
//         $("#currentDay").addClass("present")
//     }
// });
var i;
for(i= 0; i<9; i++) {
    console.log(currentTime.value)

}


