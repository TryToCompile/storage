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
    console.log(dateOfBirth);
} else {
    date = new Date(checkDate);
    greet(checkName, date);
}


function greet(name, dateOfBirth) {
    let curDate = new Date();
    let age = curDate.getFullYear() - dateOfBirth.getFullYear();
    alert('hi '+name+'!'+'\nyour age is '+age);
    let timeLeft = dateOfBirth - curDate;
    let timerElement = document.createElement('div');
    timerElement.classList.add('timer');
    document.body.append(timerElement);
    function timer() {
        let now = new Date();
        let nextBirthday = new Date(now.getFullYear(),
            dateOfBirth.getMonth(), dateOfBirth.getDate(), 0, 0, 0);
        let years = Math.abs(now.getFullYear() - nextBirthday.getFullYear());
        let months = Math.abs(now.getMonth() - nextBirthday.getMonth());
        let days = Math.abs(now.getDate() - nextBirthday.getDate());
        let hours = Math.abs(now.getHours() - nextBirthday.getHours());
        let minutes = Math.abs(now.getMinutes() - nextBirthday.getMinutes());
        let seconds = Math.abs(now.getSeconds() - nextBirthday.getSeconds());
        timerElement.innerText = `${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

        setTimeout(timer,1000);
    }
    timer();
}