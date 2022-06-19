// JavaScript file for work-day-scheduler

var currentHour = moment().hour(); //reused in timer + updateCalendar function

// Function to update the work-day calendar:
// * Colour code each row based on whether past, present or future.
// * Load any existing event entries from local storage
// * pageLoad argument: Boolean value to only load from local storage on page-load. 
function updateCalendar(pageLoad) {
    var currentDay = moment().format("dddd, MMMM Do");
    currentHour = moment().hour();
    $("#currentDay").text(currentDay); // display the current day
    // Loop through each row, set class based on current time vs row time. 
    $(".row").each(function (index) {
        //Check for Past
        if (parseInt($(this).attr("data-hour")) < currentHour && !$(this).hasClass("past")) {
            $(this).removeClass("present future").addClass("past");
        };
        //Check for Present
        if (parseInt($(this).attr("data-hour")) == currentHour && !$(this).hasClass("present")) {
            $(this).removeClass("past future").addClass("present");
        };
        //Check for Future
        if (parseInt($(this).attr("data-hour")) > currentHour && !$(this).hasClass("future")) {
            $(this).removeClass("past present").addClass("future");
        };

        // Update events from local storage when function is called with pageLoad flagged as true only.
        if (pageLoad) {
            var storageItem = localStorage.getItem($(this).attr("id"));
            if (storageItem !== null) { // only update the field if there is an entry in the local storage. 
                $(this).children(".description").val(storageItem);
            }
        };
    });
}

// 1 minute timer to check the current hour. If hour has changed since previous updateCalendar function call, run it again to apply colour coding
// Does not trigger load from localstorage. 
// NOTE: There is a delay (2-3 mins) if time is adjusted via system settings
setInterval(() => {
    var tempHour = moment().hour();
    if (currentHour != tempHour) {
        console.log("Hour Changed");
        updateCalendar(0);
    }
}, 60000);

// Save to local storage when 'Save' button is clicked for the item. 
$(".saveBtn").click(function (event) {
    event.stopPropagation();
    var elementID = $(this).parent().attr("id"); //get the ID of the row clicked. 
    var elementText = $(this).siblings("textarea").val(); // get the text in the textarea
    localStorage.setItem(elementID, elementText);

    // Display 'Saved' for 3 seconds, then change back to the saved icon. 
    $(this).text("Saved");
    setTimeout(() => {
        $(this).html("<i class='fas fa-save'></i>");
    }, 3000);
});

// Run updateCalendar function on page load. 
updateCalendar(1);