const palindrome=(s)=>{
    let temp = rev(s)
    if(temp==s){
        return true
    }
    else{
        return false
    }
}

const rev=(s)=>{
    let temp = []
    for(let i=s.length-1;i>=0;i--){
        temp = temp+s.charAt(i)
    }
    return temp
}

const palindromeIndex = (s)=>{
    if(palindrome(s))
    {
        return -1
    }
    else{
        for(let i=0;i<s.length;i++){
            let t = s.repeat(1)
            let a = t.split('')
            //console.log(a);
            a.splice(i, 1)
            //console.log(a);
            if(palindrome(a.toString())){
                return i
            }
        };
    }
}
console.log(palindromeIndex('aab')); 

