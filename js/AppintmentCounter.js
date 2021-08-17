"use strict";

function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("strong1",0 ,9, 1000);
animateValue("strong2",0 ,1500, 1000);
animateValue("strong3",0 ,5, 1000);
animateValue("strong4",0 ,30, 1000);


