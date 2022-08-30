// const plusOne = (arr) =>{
//     arr[arr.length-1]
//     //console.log(arr);
//     if(arr[arr.length-1]==9)
//     {
//         arr.pop()
//         arr.push(1)
//         arr.push(0)
//         return arr
//     }
//     else{
//         arr[arr.length-1]++
//         return arr
//     }
// }

const plusOne = (arr) =>{
    arr[arr.length-1]
    if(arr[arr.length-1]==9)
    {
        const temp = arr.pop()
        for(let i=1;i>=0;i--)
        {
            arr.push(i%temp)
            
        }
        return arr
    }
    else{
        arr[arr.length-1]++
        return arr
    }
}

console.log(plusOne([1,2,9]));