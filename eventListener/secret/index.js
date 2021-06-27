const block = document.querySelector('.container');
const paragr = document.querySelector('.paragr');


block.addEventListener('mouseover', ()=>{
    event.target.style.backgroundColor = 'yellow';
    paragr.innerHTML = 'Хочеш знати який?';
   
        block.addEventListener('mousedown', ()=>{
            event.target.style.backgroundColor = 'black';
            paragr.innerHTML = 'Не скажу';
            event.target.style.color = 'white';
        });
        block.addEventListener('mouseup', function(){
        event.target.style.backgroundColor = 'yellow';
        paragr.innerHTML = 'Хочеш знати який?';
        event.target.style.color = 'black';
   
})
});

block.addEventListener('mouseout', ()=>{
    event.target.style.backgroundColor = 'blue';
    paragr.innerHTML = 'У мене є секрет';
    event.target.style.color = 'purpule';

});
