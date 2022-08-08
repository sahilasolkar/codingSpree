const nums = [2, 7, 10, 15]
const target = 3

const twonum = (array, tar) =>{
  for(let i=0; i<array.length; i++)
  {
    for(let j=0; j<array.length; j++)
    {
       if(i==j){
      continue 
      }else{
      // let k = array[i]+array[j]
      if(array[i]-array[j]==target)
      {
        // console.log('entered j')
        return [i,j]
      }
      
    }
    }
  }
}

console.log(twonum(nums, target))