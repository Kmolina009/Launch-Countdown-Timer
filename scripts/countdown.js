'use strict '  
//DOM Element 
// document.querySelector('h1').innerText = "We're moving soon"


const timer = document.querySelector('#time-container');
const timeCardUnits = document.querySelectorAll('.time-card h2');
const timeCardTitles = document.querySelectorAll('.time-card h3');
const deadLine =new Date("May 30, 2021, 00:00:00");

function assignTimeUnitValue(obj,domElem,title){
 let cardTitle=title.innerText.toLowerCase();
  switch (cardTitle) {
    case "days":
      // console.log(`assigning time unit:${cardTitle}`)
         domElem.innerText=obj.days
      break;
    case "hours":
      // console.log(`assigning time unit:${cardTitle}`)  
       domElem.innerText=obj.hours
      break;
    case "minutes":
      // console.log(`assigning time unit:${cardTitle}`)
       domElem.innerText=obj.minutes
      break;
    case "seconds":
      // console.log(`assigning time unit:${cardTitle}`)
       domElem.innerText=obj.seconds
      break;
    default:
      alert("Unfortunately, this entry time does not exist.")
      break;
  }
}

setInterval( ()=>{
  const startTime = new Date().getTime();
  let timeRemaining =  deadLine - startTime;
// console.log(startTime)
//Time units(This could be refactored into a function call)
let timeUnits={
  "days":Math.floor(timeRemaining/(1000*60*60*24)),
  "hours":Math.floor(timeRemaining%(1000*60*60*24)/(1000*60*60)),
  "minutes": Math.floor(timeRemaining%(1000*60*60)/(1000*60)),
 "seconds":Math.floor(timeRemaining%(1000*60)/1000)
};
for (let i = 0; i < timeCardTitles.length; i++) {
  // console.log(i)
  assignTimeUnitValue(timeUnits,timeCardUnits[i],timeCardTitles[i]); 
}
},1000);

console.log(timer)