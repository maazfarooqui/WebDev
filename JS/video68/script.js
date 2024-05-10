console.log("maaz")


let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor= "red"

let boxes3 = document.getElementById("b3")
boxes3.style.backgroundColor="yellow"

document.querySelector(".box").style.backgroundColor='red'


document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor='maroon'
})
