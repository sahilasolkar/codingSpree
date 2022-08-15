const wildcard = (str1, str2) => {

    
    for(let i=0;i<str1.length;i++){
       let temp = str1.charAt(i) 
       if(str2.charAt(i)){

       }
    }

    while (i=0){
        if(str1.charAt(i)==str2.charAt(i))
        {
            i++
        }
        if(str2.charAt(i)=="*"){
            i++
        }
        if(str2.charAt(i)!=str1.charAt(i))
        {
            return console.log('false')
        }
    }
}

wildcard('a', 'aa')