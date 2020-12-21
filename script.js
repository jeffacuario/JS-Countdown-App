const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const eventNameEl = document.getElementById('eventName')


// const targetDate = '01 Jan 2021';

var eventName = prompt("Please enter the name of an event: ")
var targetDate = prompt("Please enter the date for your event (DD MMM YYYY)");

// if (targetDate != null) {
//   document.getElementById("demo").innerHTML =
//   "Hello " + person + "! How are you today?";
// }

function countDown() {
    const targetDateDate = new Date(targetDate);
    const currentDate = new Date();

    const totalSeconds = (targetDateDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    // console.log(days, hours, minutes, seconds)

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
    eventNameEl.innerHTML = eventName
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

// initial call
countDown();


setInterval(countDown, 1000);
