// Setting current hour to a variable to be used later

var currHour = moment().hours();

// Setting current time on page and making it so that the seconds and hours count up

(function update_time(){ 
    var now = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').text(now);
    setTimeout(update_time, 1000);
})();
// Creating a function that will go through each block and check if its in the present, future, or past

function blockStyling() {
    $('.time-block').each(function (){
        var currBlock = parseInt($(this).attr('id'));

        if (currBlock === currHour) {
            $(this).addClass('present');
        } else if (currBlock > currHour) {
            $(this).addClass('future');
        } else {
            $(this).addClass('past');
            //$('.hourlyEvent').attr("readonly", "readonly");
        }
})};

$(".saveBtn").click(function(event) {
    console.log("button has been clicked")
    event.preventDefault();

});

blockStyling();