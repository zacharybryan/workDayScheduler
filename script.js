'use strict'
$(document).ready(function() {
    
    var currentDay = moment().format("dddd, MMMM D, YYYY");

    console.log(currentDay);

    $("#currentDay").text(currentDay);

// CLICK FUNCTIONS


    $("#back").on("click", function() {
    let backDate = moment().subtract(1, 'days').format("dddd, MMMM D, YYYY");
    console.log(backDate);
    $("#currentDay").text(backDate);
    });

    $("#forward").on("click", function() {
    let forwardDate = moment().add(1, 'days').format("dddd, MMMM D, YYYY");
    console.log(forwardDate);
    $("#currentDay").text(forwardDate);
    });
});
