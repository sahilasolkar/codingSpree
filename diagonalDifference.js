const diagonalDifference = (arr)=>{
    let lr = 0,rl = 0
    for (let i=0,j=arr.length-1;i<arr.length,j>=0;i++,j--){
        lr=lr+arr[i][i]
        rl=rl+arr[i][j]
    }
    return Math.abs(lr-rl)
}

console.log(diagonalDifference([[11 ,2 ,4],[4, 5 ,6],[10 ,8 ,-12]]));