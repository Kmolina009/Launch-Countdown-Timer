//*********Creating a form that changes/updates date and prompt****************
//

/**/

//Click Event on header-prompt
const header = document.querySelector('h1');
const eventModal = document.querySelector('.modal') 
header.addEventListener('click',()=>{
  //Ask about when it's happening
  console.log("Header has been clicked")
  eventModal.style.display = 'flex'; 
})
//Create a modal/prompt that drops down
eventModal.addEventListener('click',(e)=>{
    switch(e.target.className){
        case 'close-btn':
        eventModal.style.display = 'none'; 
    }
},false)
//User's can input values into the prompt -> Then listin for a confirm action
//listin for a cancel action