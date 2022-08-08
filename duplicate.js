const dupArray = [1,2,2,2,3,3]

const RemoveDuplicate = (dup) => {
    let i = 0
    let temp=dup.length
    for(let j=1;j<dup.length;j++)
    {
        if(dup[i]!=dup[j])
        {
            i++
            dup[i] = dup[j]
        }

    }
    let temp1 = temp-i+1
    
    for(let k=0;k<temp1;k++)
    {
        dup.push('_')
    }
    dup.splice(i+1)
    console.log(dup)
    console.log(i+1)
}

RemoveDuplicate(dupArray)