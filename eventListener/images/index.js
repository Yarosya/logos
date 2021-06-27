const wrapper = document.querySelector('.container');
const blockArr = document.querySelectorAll('.block');
//console.log(block);

const pasteBgImg = ()=>{
    for(let i=0; i<blockArr.length; i++){
        blockArr[i].addEventListener('click', ()=>{
            let p = prompt('Pls, enter a link of image');
            console.log(`url(${p})`);
            event.target.style.backgroundImage = `url(${p})`;
         
        })
    }
};
pasteBgImg();

// wrapper.addEventListener('click', ()=>{
//     if(event.target.className == 'block'){
//     let p = prompt('Pls, enter a link of image');
//        block.style.backgroundColor = `url${"p"}`;
//        //console.log(p);
//     }
// });