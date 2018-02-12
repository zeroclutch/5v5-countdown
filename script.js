// Set the date we're counting down to
var countDownDate = new Date(Date.UTC("Feb 12, 2018 8:00:00")).getTime();
var countDownDate = new Date(Date.UTC(2018, 1, 12, 16, 0, 0)).getTime();

console.log("Hi mom.");

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the webpage
    //Top notch example of WET programming
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    document.getElementById("days-text").innerText = (days == 1) ? "day" : "days"; 
    document.getElementById("hours-text").innerText = (hours == 1) ? "hr" : "hrs"; 
    document.getElementById("minutes-text").innerText = (minutes == 1) ? "min" : "mins"; 
    document.getElementById("seconds-text").innerText = (seconds == 1) ? "sec" : "secs";
    
    //Once date has loaded, make countdown visible
    document.querySelector(".timer").style.opacity = "1";
    
    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

