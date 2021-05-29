///1

//  let copyArray = arr =>{
//     let newArr = [];
//     if (Array.isArray(arr)){
//         newArr = arr;
//     }
//     return newArr;
//  }
//  const arr1 = copyArray([1,2,3]);
// console.log(arr1);

// 2 

// let arrToString = (arr)=>{
//     let newArr = [];
//     for (const element of arr) {
//        let elToString = element.toString();
//       newArr.push(elToString);
//     //   console.log(newArr);
//     //    console.log(typeof elToString);
//     }
//     return newArr;
// }

// const arr1 = arrToString([1,2,3,4]);
// console.log(arr1);

 //3
// function getLenght(arr) {
//    let newArr = [];
//    for(let i=0;i<arr.length;i++){
//        let arrItemLenght = arr[i].length;
//         newArr.push(arrItemLenght);
//     }
//     return newArr;
// }
// const arr1 = getLenght(['Ivan','Pavlo','Ira']);
// console.log(arr1);

//4 
function removeDuplicates(arr){
   const remove = new Set(arr);
    return remove;
}
const arr1 = removeDuplicates(['html','css','html','js','js','java','java']);
console.log(arr1);

