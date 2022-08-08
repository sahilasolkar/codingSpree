const s = '[))'

const parantheses = (a)=>{

    const array = []

    for (let i=0;i<a.length;i++)
    {

        if (a.charAt(0)=='}'||a.charAt(0)==')'||a.charAt(0)==']')
        {
            console.log('false')
            return 
        }
        
        if(a.charAt(i)=='{'||a.charAt(i)=='('||a.charAt(i)=='[')
        {
            array.push(a.charAt(i))
        }

        if (a.charAt(i)=='}'||a.charAt(i)==')'||a.charAt(i)==']')
        {
            let d = a.charAt(i)
            let c = array.pop()
            if (d==']'&& c!='[')
            {
                console.log('false')
                return
            }
            else if(d=='}'&& c!='{')
            {
                console.log('false')
                return 
            }
            else if (d==')'&& c!='(')
            {
                console.log('false')
                return 
            }
        }
    }
    if(array.length==0)
    {
        console.log('true')
    }
    else{
        console.log('false')
    }
    
}

parantheses(s)