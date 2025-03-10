//go to page 
document.getElementById('discover-button').addEventListener('click', function(){
    window.location.href ='discover.html';
});

const completeButtons = document.querySelectorAll(".complete-btn")
const currentTaskElement = document.getElementById("taskHave");
const completedCountElement = document.getElementById("task-finished"); 
const taskTitle = document.getElementById("task-title");
const historyContent = document.getElementById('history-content');
// date and times:
const calender = new Date();
const currentTime = calender.toLocaleTimeString();

const currentDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const exportedDate = calender.toLocaleDateString('en-US', currentDate);
const setDate = document.getElementById('current-date').innerText = exportedDate;
//when complete button clicks:
completeButtons.forEach(button =>{
    button.addEventListener('click',(event)=>{
        const title = event.target.parentNode.parentNode.querySelector('h2').innerText;
        button.disabled = true;
        // alret 1
        alert('Board Updated Successfuly');
        // history starts
        
        const p = document.createElement('p');
        p.classList.add('bg-one','rounded-1xl', 'text-sm', 'p-2', 'mb-1', 'items-center');
        p.innerText = 
        ` You have Complete The Task ${title } at : ${currentTime}  
        `
       historyContent.appendChild(p);

        // history ends
        const remainingTask = parseInt(currentTaskElement.innerText) - 1;
        currentTaskElement.innerText = remainingTask;
  
        const completedTasks = parseInt(completedCountElement.innerText) + 1;
        completedCountElement.innerText = completedTasks;
        // congratulations alert
        const congoBtn = parseInt(currentTaskElement.innerText);
        if(congoBtn === 0){
            alert('congratulations you have completed all task');
        }
    });
});
// history clear
document.getElementById('clear-history').addEventListener('click', function(){
    document.getElementById('history-content').innerHTML='';
   });

// random color 
const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
}
document.getElementById('random-color').addEventListener('click', getColor);



