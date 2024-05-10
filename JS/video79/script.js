let a = prompt("enter the first number")
let b = prompt("enter the second number")
if(isNaN(a) || isNaN(b))
    {
        throw SyntaxError("hey dude this ain't allowed")
    }
let sum= parseInt(a)+ parseInt(b)
console.log("the sum of result is " + sum);


try {
    console.log(sum*x); //x is undefined
} catch (error) {

    console.log("error aa gaya bhai")
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    
    
    
    
}


let c = 4;

function main()
{

    try {
        console.log(sum*c);
        return true;
        
    } catch (error) {
        console.log('new error');
        return false;
    }

    finally{
        console.log('this is running even after the return statements');
        
    }
}

main()