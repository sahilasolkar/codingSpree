const plusMinus = (ar) =>{
    let positive=0, negative=0, nutral=0
    for(let i=0;i<ar.length;i++){
        if(ar[i]<0){
            positive++
        }
        else if (ar[i]>0){
            negative++
        }
        else{
            nutral++
        }
    }
    positive=positive/ar.length
    negative=negative/ar.length
    nutral=nutral/ar.length
    console.log(negative.toFixed(6))
    console.log(positive.toFixed(6));
    console.log(nutral.toFixed(6));
}
plusMinus([-4,3,-9,0,4,1])