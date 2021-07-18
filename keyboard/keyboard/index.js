const letterKey = document.querySelectorAll('.letter');
const backspace = document.querySelector('.backspace');
const tab = document.querySelector('.tab');
const caps = document.querySelector('.caps');
const enter = document.querySelector('.enter');
const shift = document.querySelectorAll('.shift');
const space = document.querySelector('.space');
let text;
let textarea = document.getElementsByClassName('container__area');


window.addEventListener('keydown', (event)=>{
    for(let i=0;i<letterKey.length;i++){
        text = letterKey[i].innerHTML;
     
        letterKey[i].classList.remove('active');
        if(event.key == text){
            textarea.innerHTML +=text;
            letterKey[i].classList.add('active');
            }
        }

        if(event.code == letterKey[13].innerHTML){
            letterKey[13].classList.add('active')
            textarea.innerHTML = textarea.innerHTML.substring(0, textarea.innerHTML)
        }
        if(event.code == space ){
            letterKey[53].classList.add('active')
            event.preventDefault();
            textarea.innerHTML += ' ';
        }
        if(event.code == letterKey[14].innerHTML){
            event.preventDefault();
            textarea.innerHTML += '\t';
            letterKey[14].classList.add('active')
        }
         if(event.code == letterKey[40].innerHTML){
            letterKey[40].classList.add('active')
            textarea.innerHTML += '\n';
            
        }

})
