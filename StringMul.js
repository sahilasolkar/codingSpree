const strToNum = (a) =>{
    let b=0
    len = a.length
    for(let i=0;i<=a.length;i++){
        let l=i+1
        if(a.charAt(i)=='1')
        {
            b=b+(zeroGenerator(len-l)*1)
        }
        else if(a.charAt(i)=='2')
        {
            b=b+(zeroGenerator(len-l)*2)
        }
        else if(a.charAt(i)=='3')
        {
            b=b+(zeroGenerator(len-l)*3)
        }
        else if(a.charAt(i)=='4')
        {
            b=b+(zeroGenerator(len-l)*4)
        }
        else if(a.charAt(i)=='5')
        {
            b=b+(zeroGenerator(len-l)*5)
        }
        else if(a.charAt(i)=='6')
        {
            b=b+(zeroGenerator(len-l)*6)
        }
        else if(a.charAt(i)=='7')
        {
            b=b+(zeroGenerator(len-l)*7)
        }
        else if(a.charAt(i)=='8')
        {
            b=b+(zeroGenerator(len-l)*8)
        }
        else if(a.charAt(i)=='9')
        {
            b=b+(zeroGenerator(len-l)*9)
        }
        else if(a.charAt(i)=='0') {
            b=b+0
        }
        else 
        {
            return console.log('error: strToNum function doesnot accept characters')
        }
    }
    return(b)
}
const zeroGenerator=(n)=>{
    let temp = 0
    if (n==0){
        return 1
    }
    else{
        temp=10**n
        return temp
    }
}
console.log(strToNum('1204a5'))