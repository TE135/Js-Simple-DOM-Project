var count = document.getElementById("count");
var plus_btn = document.getElementById("plus_btn");
var minus_btn = document.getElementById("minus_btn");
var counter = 0;

function clickHear(value) {
    counter = counter+value;
    count.innerHTML = counter;

    if(counter >= 10) {
        plus_btn.setAttribute("disabled",true);
    }else{
        plus_btn.removeAttribute("disabled",false);
    }

    if(counter <= 0) {
        minus_btn.setAttribute("disabled",true);
    }else{
        minus_btn.removeAttribute("disabled",false);
    }

}

plus_btn.addEventListener("click",function() {
    clickHear(1);
})

minus_btn.addEventListener("click",function() {
    clickHear(-1);
})