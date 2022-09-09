const clockAngle = (hh, mm) =>{
    hh = hh % 12

    let h = hh * (360/12) + (mm*360)/(12*60)
    let m = (mm*360)/60

    let angle = Math.abs(h-m)

    if(angle>180){
        angle = 360-angle
    }
    return angle
}

console.log(clockAngle(5,30));