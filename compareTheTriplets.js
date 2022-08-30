const Compare = (a,b) =>{
    let Alice = 0, Bob = 0
    let ans=[]
    for(let i=0;i<a.length;i++){
        if(a[i]>b[i]){
            Alice+=1
        }
        if(a[i]<b[i]){
            Bob+=1
        }
    }
    ans.push(Alice)
    ans.push(Bob)
    return ans
}

console.log(Compare([5,6,7],[3,6,10]));
