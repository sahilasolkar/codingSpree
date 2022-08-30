const stairCase = (n) => {
    let space=' '
    for(let i=n-1,j=1;i>=0,j<=n;i--,j++){
        console.log(space.repeat(i)+'#'.repeat(j));
    }
}
stairCase(10)

