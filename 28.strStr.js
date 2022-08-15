let s = 'abb'
let a = 'bba'
const longestString = (s, a) =>{
    
    
    for(let i=0;i<s.length;i++)
    {
        for(let j=0;j<s.length;j++){
 
            if(s.charAt(j)==a.charAt(i))
            {
                return console.log(j)
            }
            else 
            {
                return console.log('-1')
            }
        }
    }
}
longestString(s,a)
// console.log(a)
//console.log(a.splice(2))