let x = Math.floor((Math.random() * 9) + 1);
const randomGame = ()=>{
    let x = 0, y = 0, z=0;

    for(let i=0; i<10;i++)
    {
        x=Math.floor((Math.random() * 9) + 1)
        y=Math.floor((Math.random() * 9) + 1)
        z=Math.floor((Math.random() * 9) + 1)
        if((x+y+z)/3==x){
            console.log("won by 3 consecutve numbers ");
            return 
        }
        else if (Number.isInteger(Math.sqrt(x+y))){
            console.log("won by prefect sqare root");
            return 
        }
        else if (Number.isInteger(Math.sqrt(y+z))){
            console.log("won by prefect sqare root");
            return 
        }
        else if (x+y<3){
            console.log("lost! total of the last two throws less than 3");
            return 
        }
        else if (y+z<3){
            console.log("lost! total of the last two throws less than 3");
            return 
        }
        else {
            console.log("you lost!");
            return 
        }
        let temp = temp +x+y+z
    }
    if(temp>100){
        console.log("you lost! total exceeded 100")
        return 
    }
}
randomGame()