let listItem = document.querySelector('.listItem'),
    formAdd = document.forms.formAdd,
    btn = document.querySelector('.btn'),
    modalClose = document.querySelector('.js-modal-close-input'),
    modalCloseList = document.querySelector('.js-modal-close-list'),
    modalElem = document.querySelector('.modalInput'),
    modalElemList = document.querySelector('.modalList'),
    count=0;


formAdd.buttonAdd.addEventListener('click', (event)=>{
event.preventDefault();

if(formAdd.todoGoals.value == ''){
  modalElem.classList.add('active');
  modalClose.addEventListener('click', ()=>{
    modalElem.classList.remove('active');
  })
  return;
}
createElement(formAdd.todoGoals.value);
formAdd.todoGoals.value = '';
})
const createElement =(value)=>{
let deleteButton = document.createElement('button'),
    itemsName = document.createElement('p'),
    wrapperItem = document.createElement('div');

    wrapperItem.setAttribute('class', 'itemWrapper');

    deleteButton.className='itemBtn';
    
    itemsName.setAttribute('class','itemName');
    itemsName.textContent = value;
    
    listItem.appendChild(wrapperItem);
    count++;

    wrapperItem.appendChild(deleteButton);
    wrapperItem.appendChild(itemsName);

    deleteButton.addEventListener('click', (e)=>{
      if(count === 1){
        modalElemList.classList.add('active');
        modalCloseList.addEventListener('click', ()=>{
          modalElemList.classList.remove('active');
        })
        return;
      }else{
        listItem.removeChild(wrapperItem);
      }
      count--;
     
    }); 
}


