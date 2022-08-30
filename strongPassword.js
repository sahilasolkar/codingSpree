const minimumNumber=(n,pass)=>{
    let len=0, digit=0, lower=0, upper=0, special=0
    if(!pass.match(/[a-z]/)){
        lower=1
    }
    if(!pass.match(/[-,!,@,#,$,%,^,&,*,(,),+]/)){
        special =1
    }
    if(!pass.match(/[A-Z]/)){
        upper=1
    }
    if(!pass.match(/[0-9]/)){
        digit=1
    }
    if(pass.length+lower+upper+special+digit<6){
        len=6-(n+lower+upper+special+digit)
    }
    console.log(lower);
    console.log(upper);
    console.log(special);       
    console.log(digit);
    console.log(len);
    return console.log(len+digit+lower+upper+special);
}

minimumNumber(7, 'AUzs-nV')

// let temp ='AUzs-nV'
// console.log(temp.match(/[-,!,@,#,$,%,^,&,*,(,),+]/));