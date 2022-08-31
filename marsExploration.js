const marsExploration = (s) =>{
    let sum = 0, count = s.length/3, point=0, sos='SOS'
    for(let i=1;i<=count;i++){
        for(let j=0;j<sos.length;j++){
            if(sos.charAt(j)==s.charAt(point)){
                sum++
            }
            point++
        }
    }
    return Math.abs(sum-s.length)
}
console.log(marsExploration('SOSSPSSQSSOR'));