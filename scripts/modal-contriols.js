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
    console.log(e.target)
    switch(e.target.dataset.btn){
        case 'confirm':
            console.log('confirm update')
        //call, launch-upate function
        break;
        case 'close':
            console.log(e.target)
            eventModal.style.display = 'none'; 
        break;
        default:
    }
},false)
//User's can input values into the prompt -> Then listin for a confirm action
//listin for a cancel action

//Figure out what css properties need to be adjusted on the Modal for motion animation(smooth slide from above)
//How do I make the t