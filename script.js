'use strict'
$(document).ready(function() {
    
    const currentDay = moment().format("dddd, MMMM D, YYYY");

    //console.log(currentDay);

    $("#currentDay").text(currentDay);

// CLICK FUNCTIONS


    $("#back").on("click", function() {
        let backDate = moment().subtract(1, 'days').format("dddd, MMMM D, YYYY");
        //console.log(backDate);
        $("#currentDay").text(backDate);
    });

    $("#forward").on("click", function() {
        let forwardDate = moment().add(1, 'days').format("dddd, MMMM D, YYYY");
        //console.log(forwardDate);
        $("#currentDay").text(forwardDate);
    });

    $(".saveBtn").on("click", function() {
        let value = $(this).siblings(".description").val();
        //console.log(value);

        let time = $(this).parent().attr("id");
        //console.log(time);

        // add item to local storage
        localStorage.setItem(time, value);
    })

    // Get current hour / change colors accordingly .past .present .future

    let currentHour = moment().hour();
    console.log(currentHour);

//  Display local storage to screen 
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));
});
