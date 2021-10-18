const getSelect = selector => document.querySelector(selector);
const formList = document.forms['form-list']
const formTable = document.forms['table']
let colors = ['#3FBFBF', '#BFC817','#ff8080', '#ffff80', '#6A49EE', '#B71F1F', '#1a0000', '#17B4B1', '#ff0000']

let colorsBg = ['#808080', '#ff0000','#ffff00', '#ffff80', '#00ff00', '#dc143c', '#1a0000', '#ff6347', '#808000']



getSelect('.btn-edit').addEventListener('click',()=>{
    getSelect('.edit-block').classList.toggle('show');
    getSelect('.style-block').classList.remove('show');
    getSelect('.textarea-edit').value = getSelect('.top-block').innerHTML;
})

getSelect('.btn-save').addEventListener('click',()=>{
    getSelect('.edit-block').classList.remove('show');
    getSelect('.top-block').innerHTML = getSelect('.textarea-edit').value;
})
getSelect('.btn-style').addEventListener('click',()=>{
    getSelect('.style-block').classList.toggle('show');
    getSelect('.edit-block').classList.remove('show');
})
getSelect('#fonts').addEventListener('change',(e)=>{
    console.log(e.target.value);
    getSelect('.top-block').style.fontFamily = e.target.value

})

function fontSize(){
    getSelect('.top-block').style.fontSize = event.target.value
}

/*start func change color text/block*/
let color = document.getElementsByClassName('box-color-text')
let colorBG = document.getElementsByClassName('box-color-bg')


    getSelect('.color-text-btn').addEventListener('click',()=>{
        getSelect('.color-block-text').classList.remove('hide')
        getSelect('.color-block-bg').classList.add('hide')
        for(let i=0; i<color.length; i++){
            color[i].style.backgroundColor = colors[i]
            
            color[i].addEventListener('click', (event)=>{
                
              getSelect('.top-block').style.color = event.target.style.backgroundColor
              getSelect('.color-block-text').classList.add('hide')   
            })
        }

    })
    
  getSelect('.color-bg').addEventListener('click',()=>{
    getSelect('.color-block-text').classList.add('hide')   
    getSelect('.color-block-bg').classList.remove('hide')   
 
      for(let i=0; i<colorBG.length; i++){
          colorBG[i].style.backgroundColor = colorsBg[i]
          colorBG[i].addEventListener('click', ()=>{
            getSelect('.top-block').style.backgroundColor = event.target.style.backgroundColor
            getSelect('.color-block-bg').classList.add('hide')
        })

      }
  })

/*end */

/*start func style text*/
getSelect('#bold').addEventListener('click',(e)=>{
    getSelect('.top-block').style.fontWeight = e.target.value
    getSelect('.top-block').style.fontStyle = 'normal'

})

getSelect('#italic').addEventListener('click',(e)=>{
    getSelect('.top-block').style.fontWeight = 'normal'
    getSelect('.top-block').style.fontStyle = e.target.value
    
})
/* end*/


getSelect('#choose-block').addEventListener('click', (e)=>{
    
    if(e.target == getSelect('#table')){
        getSelect('.display-table').classList.remove('hide')
        getSelect('.display-list').classList.add('hide')
    }else{
        getSelect('.display-list').classList.remove('hide')
        getSelect('.display-table').classList.add('hide')
    }
})

/* start function add list*/

    getSelect('.btn-add').addEventListener('click',()=>{
        getSelect('.first-screen').classList.add('hide')
        getSelect('.second-screen').classList.remove('hide')
    })

    

    getSelect('.create-list').addEventListener('click',()=>{
        const countList = formList.count.value
       const typeList = formList.type.value

       getSelect('.textarea-edit').value += `<ul style = "list-style-type:${typeList}">` 
       for(let i =0; i<countList; i++){
        getSelect('.textarea-edit').value += `<li>Item ${i+1}</li>`
       }
       getSelect('.textarea-edit').value += `</ul>` 
       getSelect('.first-screen').classList.remove('hide')
       getSelect('.second-screen').classList.add('hide')

    })
/*end*/


/*start func create table*/


console.log(formTable);

getSelect('.create-table').addEventListener('click',()=>{

    const countTR = formTable.countTr.value
    const countTD = formTable.countTd.value
    const table = document.createElement('table')
    table.classList.add('newTable')
  
    for(let i =0; i<countTR; i++){
        let tr = document.createElement('tr')
   
        for(let j=0; j<countTD; j++){
            let td = document.createElement('td')
            td.style.width = getSelect('#width-td').value +`px`
            td.style.height = getSelect('#height-td').value+`px`
            td.style.borderWidth = getSelect('#width-border').value+`px`
            td.style.borderStyle = getSelect('#type-border').value
            td.style.borderColor = getSelect('#color-border').value

           
            tr.append(td)
        }
        table.append(tr)
        
    }
    getSelect('.textarea-edit').append(table)
    getSelect('.textarea-edit').value +=`<table>`
    getSelect('.textarea-edit').value += getSelect('.newTable').innerHTML
    getSelect('.textarea-edit').value +=`</table>`
   
    getSelect('.first-screen').classList.remove('hide')
    getSelect('.second-screen').classList.add('hide')
 
})


/*end*/

