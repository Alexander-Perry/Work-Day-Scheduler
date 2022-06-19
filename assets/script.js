// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// <p id="currentDay" class="lead"></p> <---- Current Date
// </header>
// <div class="container">
//   <!-- Timeblocks go here -->
// </div>

//using 
// * bootstrap
// * jquery
// * fontawesome - the icons
// * moment
var currentDay = moment().format("dddd, MMMM Do");
var currentHour = moment().hour();
$("#currentDay").text(currentDay);


//TODO:
// 3 columns, timeslot, the event, save button
// event is text entry that can be modded, save button saves to local storage.
// colour code the events based on time.


// 1 minute timer to refresh current day/hour and change the classes based on past/present/future. -- No need to run the check any more frequent than this.

//Move below into a function... 

setInterval(() => {
    currentDay = moment().format("dddd, MMMM Do");
    currentHour = moment().hour();
    if($("#currentDay").text() != currentDay){
        $("#currentDay").text(currentDay);
    };
    console.log($("#currentDay").text());

    $(".row").each(function (index) {
        //Check for Past
        if (parseInt($(this).attr("data-hour")) < currentHour && !$(this).hasClass("past")) {               
            $(this).removeClass("present future").addClass("past");
            console.log("past added");
        };
        //Check for Present
        if (parseInt($(this).attr("data-hour")) == currentHour && !$(this).hasClass("present")) {               
            $(this).removeClass("past future").addClass("present");
            console.log("present added");
        };
        //Check for Future
        if (parseInt($(this).attr("data-hour")) > currentHour && !$(this).hasClass("future")) {               
            $(this).removeClass("past present").addClass("future");
            console.log("future added");
        };
        // if localStorage.getItem($(this).attr("id")    )
        console.log($(this).attr("id"));
        var currentID = $(this).attr("id");  

        if (localStorage.getItem(currentID) !== null) {
            console.log(localStorage.getItem(currentID));
            
            // $(this).children(".description").val()
        }

    });
    
}, 10000);

$(".saveBtn").click(function(event){
    event.stopPropagation();
    //save to local storage
    var elementID = $(this).parent().attr("id"); //get the ID of the row
    var elementText = $(this).siblings("textarea").val(); // get the text in the textarea

    localStorage.setItem(elementID, elementText);

});

// click event for save button. That's really it... trigger event off 'this' row. 
// this.siblings(textarea)
