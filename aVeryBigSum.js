const aVeryBigSum = (ar)=>{
    let temp = 0
    for (let i=0;i<ar.length;i++){
        temp = temp+ar[i]
    }
    return temp
}

console.log(aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]));