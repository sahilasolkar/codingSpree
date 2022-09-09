const pow = (a, b) =>{
    if(b==0){
        return 1
    }
    let ans = a, inc = a

    for(let i=1;i<b;i++){
        for(let j=1;j<a;j++){
            ans += inc
        }
        inc = ans
    }
    return ans
}

console.log(pow(5,3));