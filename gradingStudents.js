const gradingStudents = (grades)=>{
    let temp = []
    for(let i=0;i<grades.length;i++){
        if(grades[i]<38){
            temp.push(grades[i])
        }
        else
        {
            if(grades[i]%5==0){
                temp.push(grades[i])
            }
            if(grades[i]%5==3){
                temp.push(grades[i]+2)
            }
            if(grades[i]%5==4){
                temp.push(grades[i]+1)
            }
            if(grades[i]%5==2 || grades[i]%5==1)
            {
                temp.push(grades[i])
            }
        }
    }
    console.log(temp);
}
gradingStudents([73,67,38,33])