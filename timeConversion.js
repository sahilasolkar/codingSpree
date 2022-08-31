const timeConverter=(t)=>{
    if(t.charAt(8)=='A'){
        if(t.charAt(0)=='1' && t.charAt(1)=='2')
        {
            return console.log('00' + t.slice(2,8));
        }
        return console.log(t.slice(0,8));
    }
    else{
        let temp = t.slice(2,8)
        let ans = ((parseInt(t.split(':')[0]))+12).toString()
        if(ans==24)
        {
            return console.log('00'+temp);
        }
        return console.log(ans+temp);
    }
}
timeConverter('12:45:54PM')