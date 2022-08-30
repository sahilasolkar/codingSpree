const hackerrankInString=(s)=>{
    let ar = ['k','n','a','r','r','e','k','c','a','h']
    for(let i=0;i<=10;i++)
    {
        if(s.match(ar[ar.length-1]))
        {
            ar.pop()
        }
    }
    if(ar.length==0)
    {
        return 'YES'
    }
    else{
        return 'NO'
    }
}

//console.log(hackerrankInString('rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt'));
let ar = ['k','n','a','r','r','e','k','c','a','h']