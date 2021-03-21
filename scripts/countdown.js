'use strict '  
//DOM Element 

const timer = document.querySelector('#time-container');
const timeCards = document.querySelectorAll('.time-card h2');
//Get the Date 14 days into the future, or based on the date user inputs
// const deadLine =new Date(Math.floor(new Date().setDate(new Date(startTime).getDate()+14)))
const deadLine =new Date("Apr 3, 2021, 00:00:00");
setInterval( ()=>{
  const startTime = new Date().getTime();
  let timeRemaining =  deadLine - startTime;

//Time units(This could be refactored into a function call)
let days = Math.floor(timeRemaining/(1000*60*60*24));
let hours = Math.floor(timeRemaining%(1000*60*60*24)/(1000*60*60));
let minutes = Math.floor(timeRemaining%(1000*60*60)/(1000*60));
let seconds = String(Math.floor(timeRemaining%(1000*60)/1000));

//Timer update
  //Change text to updated time
// console.log(seconds)
// console.log(minutes)
//  let someFormattedDate = `
//  -------------------------------------------------------------------------------
// // | ${days} Day Left | ${hours} Hours left | ${minutes} Minutes Left | ${seconds} Seconds left |
//  -------------------------------------------------------------------------------
//  `;
//  console.log(someFormattedDate)
// console.log(
  timeCards[0].innerText=days;
  timeCards[1].innerText=hours;
  timeCards[2].innerText=minutes;
timeCards[3].innerText=seconds;
// )
},1000);

console.log(timer)