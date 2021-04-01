

//Tracks and displays what day it is in header.
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
//Tracks what hour it currently is
var currentHour = moment().format("HH");
console.log(currentHour)
var timeColumn = $(".time")

//Checks local time and compares/sets calander color
for(i=0; i< timeColumn.length; i++ ) {
    var temp = timeColumn[i];
    if (timeColumn[i].id === currentHour) {
         temp.classList.remove("past");
         temp.classList.remove("future");
         temp.classList.add("present")
    } else if (timeColumn[i].id > currentHour) {
         temp.classList.remove("past");
         temp.classList.add("future");
         temp.classList.remove("present")
    } else {
         temp.classList.add("past");
         temp.classList.remove("future");
         temp.classList.remove("present")
    }
}

//Pulls task from local storage and displays on page
$( document ).ready(function() {
    $('#nine-input').val(JSON.parse(localStorage.getItem('nine-task')))
    $('#ten-input').val(JSON.parse(localStorage.getItem('ten-task')))
    $('#eleven-input').val(JSON.parse(localStorage.getItem('eleven-task')))
    $('#twelve-input').val(JSON.parse(localStorage.getItem('twelve-task')))
    $('#one-input').val(JSON.parse(localStorage.getItem('one-task')))
    $('#two-input').val(JSON.parse(localStorage.getItem('two-task')))
    $('#three-input').val(JSON.parse(localStorage.getItem('three-task')))
    $('#four-input').val(JSON.parse(localStorage.getItem('four-task')))
    $('#five-input').val(JSON.parse(localStorage.getItem('five-task')))
})

//Saves task to local storage
$('#nine').on('click', function() {
    console.log($('#nine-input').val())
    localStorage.setItem('nine-task', JSON.stringify($('#nine-input').val()))
})
$('#ten').on('click', function() {
    console.log($('#ten-input').val())
    localStorage.setItem('ten-task', JSON.stringify($('#ten-input').val()))
})
$('#eleven').on('click', function() {
    console.log($('#eleven-input').val())
    localStorage.setItem('eleven-task', JSON.stringify($('#eleven-input').val()))
})
$('#twelve').on('click', function() {
    console.log($('#twelve-input').val())
    localStorage.setItem('twelve-task', JSON.stringify($('#twelve-input').val()))
})
$('#one').on('click', function() {
    console.log($('#one-input').val())
    localStorage.setItem('one-task', JSON.stringify($('#one-input').val()))
})
$('#two').on('click', function() {
    console.log($('#two-input').val())
    localStorage.setItem('two-task', JSON.stringify($('#two-input').val()))
})
$('#three').on('click', function() {
    console.log($('#three-input').val())
    localStorage.setItem('three-task', JSON.stringify($('#three-input').val()))
})
$('#four').on('click', function() {
    console.log($('#four-input').val())
    localStorage.setItem('four-task', JSON.stringify($('#four-input').val()))
})
$('#five').on('click', function() {
    console.log($('#five-input').val())
    localStorage.setItem('five-task', JSON.stringify($('#five-input').val()))
})






