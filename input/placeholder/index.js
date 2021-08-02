let formMove = document.forms.formMove;
let taskPlace = document.forms.taskPlace;




formMove.firstInp.addEventListener('change', ()=>{
    let text = (event.target.value);
    formMove.moveBtn.addEventListener('click', ()=>{
        formMove.secondInp.value = text;
        formMove.firstInp.value = ' ';
        
    })  
})

taskPlace.inputValue.addEventListener('change',(e)=>{
  
e.target.placeholder = e.target.value;
console.log(e.target.placeholder);
e.target.value = "";
})

