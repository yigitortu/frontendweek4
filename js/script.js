let userName = prompt("Adınızı gir : ")

// document.getElementById("myName").textContent = userName;
document.querySelector("#myName").textContent = userName;

var currentDate = new Date();
var currentHour = currentDate.getHours();
var currentMinutes = currentDate.getMinutes();
var currentDay = currentDate.getDay();

var daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

document.getElementById("myClock").textContent = 
 `${currentHour} : ${currentMinutes}   ${daysOfWeek[currentDay]} ` ;