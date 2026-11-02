var timer = document.getElementById("timer");
var start = document.getElementById("start");
var stop = document.getElementById("stop");

var start_tim;
var set;
var Is_running = false;

function start_timer(start_time) {
        set = setInterval(() => {
        var minutes = parseInt(start_time / 60, 10);
        var seconds = parseInt(start_time % 60 ,10);

        var display_minutes = minutes < 10 ? '0' + minutes:minutes;
        var display_seconds = seconds < 10 ? '0' + seconds:seconds;

        timer.innerHTML= display_minutes +':'+ display_seconds;

        if(--start_time < 0) {
            clearInterval(set);
            timer.innerHTML="Breath Out";

            setTimeout(() => {
                timer.innerHTML="Breath In";
                start_timer(start_tim);
            }, 3000);
        }

    }, 1000);
};

start.addEventListener("click",function() {
    if(!Is_running) {
        start_tim = 15;
        start_timer(start_tim);
        Is_running = true;
    }
});
stop.addEventListener("click",function() {
    clearInterval(set);
    Is_running = false;
});