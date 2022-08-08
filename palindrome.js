let rev = 1234543210987
let temp = rev.toString()
// console.log(temp)
const temp1 = temp.split("")
//console.log(temp1)
const temp2 = temp.split("").reverse()
//console.log(temp2)

if(JSON.stringify(temp1)==JSON.stringify(temp2))
{
  //console.log(temp1)
  //console.log(temp2)
   console.log("palindrome")
}
  else
{
   console.log("not a palindrome")
}