const nums = [2, 7, 10, 15]
const target = 9

const twonum = (array, tar) =>{
  for(let i=0; i<array.length; i++)
  {
    for(let j=i+1; j<array.length; j++)
    {
      // let k = array[i]+array[j]
      if(array[i]+array[j]==target)
      {
        // console.log('entered j')
        return [i,j]
      }
    }
  }
}