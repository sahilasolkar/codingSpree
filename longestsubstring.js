let s = 'pwer'
let a = s.split("")

const longestString = (s) =>{
    
    let a=0
    for(let i=0;i<s.length;i++)
    {
        for(let j=i+1;j<s.length-1;j++){
            let temp = s.charAt(i)
            if(s.charAt(j)==temp)
            {
                
            }
        }
    }
}
console.log(a)
console.log(a.splice(2))
//longestString(s)