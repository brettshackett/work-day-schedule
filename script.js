var saveBtn = $(".saveBtn");

//formats the time, example of format (Sunday, April 3rd 2022)
//displays the current date and time at the top of the schedule
$("#currentDay").text(moment().format('dddd MMMM Do, YYYY, h:mm a'));


//setting the color of the hour block based on the time in the day, declared in the hour variable/
//past hours have a grey background
//the current hour would have an orange background
//the future hours would have a green color

function blockColor(){
    var hour = moment().hours();
    $(".time-block").each(function(){
        // var hour = moment().hours();
        var currentHour = parseInt($(this).attr("id"));

        if(currentHour > hour){
            $(this).addClass("future");
        }else if(currentHour === hour){
            $(this).addClass("present");
        }else{
            $(this).addClass("past")
        }
    })
};


//saving the the task that was input to the localstorage so that the information can be saved and used later
saveBtn.on("click", function(){

    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    localStorage.setItem(time, plan);
});


//creating the schedule by using the information that was sent to the local storage and displaying it in the correct hour slot
function schedule(){
    $(".hour").each(function(){
        var currentHour = $(this).text();
        var currentSch = localStorage.getItem(currentHour);

        if(currentSch !== null){
            $(this).siblings(".plan").val(currentSch)
        } 
    });
}

//calling the functions 
blockColor();
schedule();