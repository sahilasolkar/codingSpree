const arr = [3,2,2,3]
const newArr = (arr,val)=>{
    return arr.filter((values)=> values != val) 
}
console.log(newArr(arr,3))