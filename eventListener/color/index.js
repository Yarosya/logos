const block = document.querySelector('.container');
let count = 0;


block.addEventListener('mouseover', ()=>{
       count++;
       if(count === 1){
        event.target.style.backgroundColor = 'red';
       }else if(count === 2){
        event.target.style.backgroundColor = 'yellow';
       }else if(count === 3){
        event.target.style.backgroundColor = 'green';
        count =0;
           }
   console.log(count);
        
    
});
block.addEventListener('mouseout', ()=>{
    event.target.style.backgroundColor = 'blue';
});
