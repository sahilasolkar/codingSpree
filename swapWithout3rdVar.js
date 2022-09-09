const swap = (a, b) =>{
    if(a==b){
        console.log(a);
        console.log(b);
        return 
    }
    a = a+b
    b=a-b
    a=a-b
    console.log(a);
    console.log(b);
}

// int first[] = { a, b };
 
//     // `second` will contain the maximum of the first two elements at
//     // the 0th index and the third element at index 1
//     int second[] = { first[a < b], c };
 
//     // finally, return the maximum element
//     return second[second[0] < c];

// let a = 2, b=3, c=4
// let ar = [], ar1 = []
// ar = [a, b]
// ar1= [ar[a<b], c]

// console.log(ar1[ar1[0]<c])
//swap(1,1)