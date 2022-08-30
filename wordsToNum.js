const lib = (n)=>{
    if (n == 'one')
        return 1;
    if (n == 'two')
        return 2;
    if (n == 'three')
        return 3;
    if (n == 'four')
        return 4;
    if (n == 'five')
        return 5;
    if (n == 'six')
        return 6; 
    if (n == 'seven')
        return 7;
    if (n == 'eight')
        return 8;
    if (n == 'nine')
        return 9;
    if (n == 'ten')
        return 10;
    if (n == 'hundred')
        return 100;
    if (n == 'thousand')
        return 1000;
    if (n == 'lakh')
        return 100000;
    if (n == 'crore')
        return 10000000;
    if (n == 'million')
        return 1000000;   
    if (n == 'twenty')
        return 20;
    if (n == 'thirty')
        return 30;
    if (n == 'fourty')
        return 40;
    if (n == 'fifty')
        return 50;
    if (n == 'sixty')
        return 60;
    if (n == 'seventy')
        return 70;
    if (n == 'eighty')
        return 80;
    if (n == 'ninety')
        return 90;
    return -1;
}

const wordsToNum = (w) => {
    let temp = w.split(' ')
    console.log(temp);
    let res = 0
    for(let i=0;i<temp.length;i++)
    {
        if(temp[i]=='and')
        {
            continue
        }
        else if (temp[i+1]=='hundred'||temp[i+1]=='thousand'||temp[i+1]=='lakh'||temp[i+1]=='crore'||temp[i+1]=='million')
        {
            res = res + lib(temp[i])
            res = res * lib(temp[i+1])
            i++
        }
        // else if (temp[i+2]=='hundred'||temp[i+2]=='thousand'||temp[i+2]=='lakh'||temp[i+2]=='crore'||temp[i+2]=='million')
        // {
        //     let t = temp[i]
        //     t = t + temp[i+1]
        //     t = t + temp[i+2]
        //     res = res + t
        //     i++
        //     i++
        // }
        else{
            res = res + lib(temp[i])
        }
        
    }
    console.log(res);
}

wordsToNum('fourty one lakh two hundred and fifty')
//console.log(lib('ninety'));