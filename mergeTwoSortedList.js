// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]


const list1 = [1,2,13], list2 = [1666,3,4]

const mergeList = (l1, l2) => {
    
    const arr=[]
    let len = l1.length+l2.length

    for(let a=0;a<l1.length;a++)
    {
        arr.push(l1[a])
    }

    for(let a=0;a<l2.length;a++)
    {
        arr.push(l2[a])
    }

    for(let i=0; i<arr.length;i++){
        for(let j=0;j<arr.length;j++)
        {
            if(arr[j]>arr[i])
            {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i]=temp
            }
        }
    }

    console.log(arr)
   
    
}

mergeList(list1, list2)

