let signUp = document.forms.signUp;
let signOut = document.querySelector('.signOut');
let gender = document.querySelector('.gender');
let containerUp = document.querySelector('.container__signUp');
let containerOut = document.querySelector('.container__signOut');
let nameProfile = document.querySelector('.profile__name');
let email = document.querySelector('.profile__email');
let destination = document.querySelector('.profile__destination');

signUp.btnSign.addEventListener('click', (event)=>{
    event.preventDefault();
    nameProfile.innerHTML = signUp.fName.value + ' ' + signUp.secondN.value;
    email.innerHTML = signUp.emailAdress.value ;
    destination.innerHTML = signUp.positionSelect.value ;
    signUp.gender.value== 'male' ? gender.src = "./image/man.png" : gender.src = "./image/women.png";
    if(signUp.agree.checked){
        containerUp.style.display = 'none';
        containerOut.style.display = 'block';
    }
  
});

signOut.addEventListener('click', (event)=>{
    event.preventDefault();
    containerUp.style.display = 'block';
    containerOut.style.display = 'none';
    signUp.reset();
})