const birthdayCakeCandles = (candles) =>{
    let temp = candles[0], temp1 = 0
    for(let i=1;i<candles.length;i++){
        if(candles[i]>temp){
            temp=candles[i]
        }
    }
    for(let j=0;j<candles.length;j++){
        if(candles[j]==temp){
            temp1++
        }
    }
    console.log(temp1)
}
birthdayCakeCandles([3,2,1,3])