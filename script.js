'use strict'
var now = moment().format("dddd, MMMM D, YYYY");

console.log(now);

$("#currentDay").text(now);

$("#back").on("click", function() {
    let backDate = moment().subtract(1, 'days');
    console.log(backDate);
    $("#currentDay").text(backDate)
});

$("#forward").on("click", function() {
    
});