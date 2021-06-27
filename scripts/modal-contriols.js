//*********Creating a form that changes/updates date and prompt****************
//

/**/

//Click Event on header-prompt
const header = document.querySelector('h1');
const eventModal = document.querySelector('.modal') 

header.addEventListener('click',()=>{
  //Ask about when it's happening
  eventModal.style.display = 'flex'; 
})
//Create a modal/prompt that drops down
eventModal.addEventListener('click',(e)=>{
    switch(e.target.dataset.btn){
        case 'confirm':
            updateLaunch()
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

const updateLaunch = () => {
    let launchTitle = document.querySelector('input[name="Launch-Header"]');
    let dateInput = document.querySelector('input[name="Date-Set"]');
    if( typeof dateInput.value !== 'invalid date' && typeof launchTitle.value !== '' ){
        localStorage.clear();
        localStorage.setItem("Launch Title",`${launchTitle.value}` )
        localStorage.setItem("Launch Date",`${new Date (dateInput.value)}` )
    }else{
        throw "Both input's must be filled is required";
    }
}

// NOTE 
// Figure out what css properties need to be adjusted on the Modal for motion animation(smooth slide from above)