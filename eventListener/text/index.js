document.querySelector('ol').addEventListener('click', ()=>{
    event.target.style.color = event.target.textContent;
    console.log(event.target.textContent);
})