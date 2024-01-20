const YEAR_DIVIDER = 1000 * 60 * 60 * 24 * 365;
const MONTH_DIVIDER = 1000 * 60 * 60 * 24 * 30;
const DAY_DIVIDER = 1000 * 60 * 60 * 24;
const HOUR_DIVIDER = 1000 * 60 * 60;
const MINUTE_DIVIDER = 1000 * 60;
const SECOND_DIVIDER = 1000;
let interval;

let checkName = localStorage.getItem("name");
let checkDate = localStorage.getItem("dateOfBirth");
if (!checkName || !checkDate) {
    let name = prompt("input ur name:");    
    let dateOfBirth = prompt("input ur date of birth (like 12.12.22):");
    dateOfBirth = new Date(dateOfBirth);
    if(!isNaN(dateOfBirth.getTime())) {
        localStorage.setItem("dateOfBirth", dateOfBirth);
        localStorage.setItem("name", name);
    } else {
        console.error('invalid date of birth');
    }
} else {
    date = new Date(checkDate);
    greet(checkName, date);
}

function greet(name, dateOfBirth) {
    alert('hi '+name+'!');
    let timerElement = document.createElement('div');
    timerElement.classList.add('timer');
    document.body.append(timerElement);
    function timer(seconds) {
        const now = new Date();
        const nextBirthday = new Date(now.getFullYear(),
        dateOfBirth.getMonth(), 
        dateOfBirth.getDate(),
        0, 0, 0); //dateOfBirth;
        interval = setInterval(() => {
            let today = new Date();
            if (today > nextBirthday) {
                nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
            }   
            let milliSecondsLeft = Math.floor((nextBirthday - today) );
            if (milliSecondsLeft < 0 || (today.getDate() == dateOfBirth.getDate() && today.getMonth() == dateOfBirth.getMonth())) {
                alert('Happy birthday!');
                clearInterval(interval);
                timerElement.remove();
                return;
            }
            let years = Math.floor(milliSecondsLeft / YEAR_DIVIDER);
            let months = Math.floor(milliSecondsLeft / MONTH_DIVIDER);
            let remain = milliSecondsLeft % MONTH_DIVIDER;
            let days = Math.floor(remain / DAY_DIVIDER);
            remain = remain % DAY_DIVIDER;
            let hours = Math.floor(remain / HOUR_DIVIDER);
            remain = remain % HOUR_DIVIDER;
            let minutes = Math.floor(remain / MINUTE_DIVIDER);
            remain = remain % MINUTE_DIVIDER;
            let seconds = Math.floor(remain / SECOND_DIVIDER);
            remain = remain % SECOND_DIVIDER;
            let milliseconds = remain % 1000;
            timerElement.innerText = `${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds ${milliseconds} milliseconds left`; 
        },100)
    }
    timer();
}