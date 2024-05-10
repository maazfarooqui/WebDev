let btn = document.getElementById("btn")

btn.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "this is something new"
})

document.addEventListener("keypress", (e)=>{
    console.log(e)
})