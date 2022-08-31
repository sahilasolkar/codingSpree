const sort = (arr) => {
    let t = 0
    let c = 0
    let d = []
    for (let y=0;y<arr.length;y++){
        d.push(arr[y])
    }

    for (let p = 0; p < arr.length-1; p++) {
        for (let k = 0; k < arr.length - 1; k++) {
            if (arr[k + 1] > arr[k]) {
                t = arr[k]
                arr[k] = arr[k + 1]
                arr[k + 1] = t
            }
            if (d[k + 1] < d[k]) {
                c = d[k]
                d[k] = d[k + 1]
                d[k + 1] = c
            }
        }
    }
    arr.splice(4)
    d.splice(4)
    let s1=0, s2=0
    for(let f=0;f<arr.length;f++){
        s1=s1+arr[f]
        s2=s2+d[f]
    }
    console.log(s2+' '+s1);
}

sort([1,2,3,4,5])