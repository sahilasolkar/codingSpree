const lengthPrint = (a) =>
{
    let b = a.split(' ')
    console.log(a);
    return console.log(b[b.length-1].length);
}
lengthPrint('hello rldd')