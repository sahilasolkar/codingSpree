const addTwoNums = (n1, n2)=>{
    let ar1 = revNum(n1) 
    let ar2 = revNum(n2)
    let ar3 = arrToNum(ar1)+arrToNum(ar2)
    let final = revNum(numToarr(ar3))
    console.log(final);
}

const revNum= (n) => {
    let arr = []
    for(let i=n.length-1;i>=0;i--)
    {
        arr.push(n[i])
    }
    return arr
}

const arrToNum = (arr) => {
    let temp = 0
    for(let i=0; i<arr.length; i++)
    {
        temp = temp+(arr[i]*(10**(arr.length-i-1)))
    }
    return temp
}

const numToarr=(num)=>{
    return Array.from(String(num), Number);
}

//console.log(numToarr(123));
addTwoNums([0], [0]);
