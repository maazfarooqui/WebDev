//faulty calculator 
// the faulty calculator does following:
// 1. takes two numbers as Input
// 2. performs wrong calculations( addn instead of mul, or division instead of subtraction)
// 3. the wrong calculations should be done only 10% of Time

c=Math.floor(Math.random()*100)
let a=7
let b=9
let input= '+'
let call = c>40? calc(a, b): false_calc(a, b)
console.log(call)


function false_calc( a, b ){

    if(input=='+')
    {
        return (a-b)
    }

    else if( input == "-")
    {
        return(a*b)
    }

    else if( input =="*")
    {
        return(a/b)
    }

    else if(input =="/")
    {
        return(a+b)
    }

    else
    {
        return "invalid input"
    }

    
}

function calc( a, b ){

    if(input=='+')
    {
        return (a+b)
    }

    else if( input == "-")
    {
        return(a-b)
    }

    else if( input =="*")
    {
        return(a*b)
    }

    else if(input =="/")
    {
        return(a/b)
    }

    else
    {
        return "invalid input"
    }

    
}