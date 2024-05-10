let a =7
function Fact(num)
{
    let arr = Array.from(Array(num+1).keys())
    let c = arr.slice(1, ).reduce((a,b) => a*b)
    return c

}

Fact(a)