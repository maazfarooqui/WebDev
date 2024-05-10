console.log("script is working")

// let boxes= document.getElementsByClassName("box")   => method 1

let boxes = document.querySelector(".container").children //method 2 

console.log(boxes)

function randomcolor()
{
    let val1 = Math.floor(Math.random()*256);
    let val2 = Math.floor(Math.random()*256);
    let val3 = Math.floor(Math.random()*256);

    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e=>
    {e.style.backgroundColor=randomcolor() }
)