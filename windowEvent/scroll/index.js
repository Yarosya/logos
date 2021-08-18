let down = document.querySelector('.scrollDown'),
    scrollLeft = document.querySelector('.scrollLeft'),
    leftText = document.querySelector('.scrollText'),
    scrollImg = document.querySelector('.scrollImg'),
    scrollDownLink = document.querySelector('.scrollDownLink'),
    up = document.querySelector('.scrollUp');
    upLink = document.querySelector('.scrollUpLink'),
   


  upLink.addEventListener('click',(e)=>{
    e.preventDefault();
  })

  scrollDownLink.addEventListener('click',(e)=>{
    e.preventDefault();
  })

        window.addEventListener('scroll', ()=>{
        console.log(window.scrollY);
        window.scroll({
            behavior:"smooth"
        })
        let fontSizeText= 30,
        leftTextW =300,
        fontSizeUp = 46;
    
        if(scrollY>=40 && scrollY<=216){
            scrollDownLink.style.fontSize = `${fontSizeText*(scrollY/100)}px`;   
        }
        if(scrollY>=150 && scrollY<=451){
            leftText.style.width = `${leftTextW + (scrollY/5)}px`;   
            leftText.style.marginLeft = `${(scrollY/5)}px`;   
        }
        if(scrollY>=150 && scrollY<=451){
            scrollImg.style.marginRight = `${(scrollY/5)}px`;   
        }
        if(scrollY>=500 && scrollY<800){
            upLink.style.fontSize = `${fontSizeUp - (scrollY/50)}px`;   
        }
    })

    up.addEventListener('click', ()=>{
        window.scroll({
                    top: 0,
                    behavior: 'smooth'
                })
    })


    scrollDownLink.addEventListener('click', ()=>{
        window.scroll({
            top: 350,
            behavior: 'smooth'
        })
    
        //   upLink.scrollIntoView({
    //       behavior:'smooth' 
    //   });
    })