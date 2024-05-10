let random = Math.floor(Math.random()*100)
let a = prompt("enter the first number ")
let b = prompt('enter the second number ')
let op = prompt("enter your operation ")


let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
};
console.log(random)

if (random>0.1){
    alert(`the result of this expression is ${eval(`${a} ${op} ${b}`)}`)
}

else{

    op = obj[op]
    alert(`the result of this expression is ${eval(`${a} ${op} ${b}`)}`)

}