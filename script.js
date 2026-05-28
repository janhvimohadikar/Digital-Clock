let time = document.querySelector(".time");

let now = new Date();
console.log(now);
function updateTime(){
    let now = new Date();
    rawHour = now.getHours();
    rawMinute = now.getMinutes();
    rawSecond = now.getSeconds();
    finalHour = String(rawHour).padStart(2, "0");
    finalMinute = String(rawMinute).padStart(2, "0");
    finalSecond = String(rawSecond).padStart(2, "0");
    time.innerText = (finalHour + ":" + finalMinute + ":" + finalSecond);
}

updateTime();
setInterval(updateTime, 1000);

let date = document.querySelector(".date");
rawMonth = now.getMonth() + 1;
rawDate = now.getDate();

finalMonth = String(rawMonth).padStart(2, "0");
finalDate = String(rawDate).padStart(2, "0");
date.innerText = (finalDate + "/" + finalMonth + "/" + now.getFullYear());


let clearDate = document.querySelector(".clearDate");
clearDate.innerText = now.toDateString();



