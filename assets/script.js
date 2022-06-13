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
var currentDay, currentHour;

//TODO: 
// 3 columns, timeslot, the event, save button
// event is text entry that can be modded, save button saves to local storage. 
// colour code the events based on time. 

setInterval(() => {
    currentDay = moment().format("dddd, MMMM Do")
    currentHour = moment().format("hh")
    $("#currentDay").text(currentDay);

    /// classes = past, .present .future already exist. 
    // If query for currenthour and the timeblocks


    // standard Timer to get current date/time and update the id "currentDay" - update every second
    // Check current time vs the 'timeblocks' and colour based on past (grey),present (red),future (green). 
    
}, 1000);

// click event for save button. That's really it... trigger event off 'this' row. 

