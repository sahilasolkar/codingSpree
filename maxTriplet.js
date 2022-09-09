const maxTriplet = (a, b, c) =>{
    let i = 0
    while(a!=0 && b!=0 && c!=0){
        a--
        b--
        c--
        i++
    }
    return i
}
console.log(maxTriplet(1,2,3));