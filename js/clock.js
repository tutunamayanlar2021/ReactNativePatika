function getName() {
    let name = prompt("What is your name?");
    let nameElement = document.getElementById("myName");
    nameElement.textContent = name;
}

function showTime() {


    let clockElement = document.getElementById("myClock");

    let dateNow = new Date();
    
    let hour = dateNow.getHours();
    let minute = dateNow.getMinutes();
    let second = dateNow.getSeconds();

    let day = dateNow.getDate();
    let month = dateNow.getMonth() + 1;
    let year = dateNow.getFullYear();

    let timeString = `${hour}:${minute}:${second}`;
    let dateString = `${day}/${month}/${year}`;

    clockElement.textContent = timeString + " " + dateString;
    setInterval(showTime, 1000);
}

getName();
showTime();