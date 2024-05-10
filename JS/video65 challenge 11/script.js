

function fact(a)
{
    if(a<=1){
        return 1;
    }

    else{
    return a*fact(a-1)
    }
}
let a= prompt("enter the number")
let result = fact(a)

console.log(result)