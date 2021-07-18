const color = document.querySelector('.color');
const image = document.querySelector('.image');
const item = document.querySelectorAll('.item');
const item1 = document.querySelectorAll('.item1');
const c = document.querySelector('.container');
const w = document.querySelector('.wrapper');
const b = document.querySelector('body');

color.addEventListener('click', ()=>{
    if(!(c.classList.contains('show')))  b.style.backgroundColor = 'white';
    c.classList.toggle('show');
    });
for(let i=0; i<item.length;i++){
   item[i].style.backgroundColor = item[i].classList[0];
   item[i].addEventListener('click', ()=>{
       b.style.backgroundColor = item[i].style.backgroundColor; 
      b.style.backgroundColor === 'black' ? b.style.color = 'white': b.style.color = 'black';
   });
}


image.addEventListener('click', ()=>{
    if(!(w.classList.contains('show__img')))  b.style.backgroundImage = '';
    w.classList.toggle('show__img');

    for(let i=0; i<item1.length;i++){      
        item1[i].addEventListener('click', ()=>{
           console.log(item1[i].style.backgroundImage);
            b.style.backgroundImage = item1[i].style.backgroundImage;
        })
       
    }
});