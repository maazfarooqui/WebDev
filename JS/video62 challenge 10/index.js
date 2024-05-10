 a1="CRAZY"
 a2="AMAZING"
 a3="FIRE"

 name1='Engine'
 name2="Foods"
 name3="Garments"

 w1="Bros"
 w2="Limited"
 w3="Hub"

 function getNumber(min, max){
    return Math.floor(Math.random() * (max-min+1) * 10) + min
 }

 var minNum=1
 var maxnum=10
 var randomNumber=getNumber(minNum, maxnum)

console.log(randomNumber)

function namegenrator(x1, x2, x3){
    console.log(`${x1} ${x2} ${x3}`)
}

if(randomNumber>80 && randomNumber<100){
    namegenrator(a1, name1, w1 )

}
else if(randomNumber>60 && randomNumber<=80){
    namegenrator(a2, name2, w2)
}


else if(randomNumber>40 && randomNumber<=60){
    namegenrator(a3, name3, w3)
}


else if(randomNumber>20 && randomNumber<=40){
    namegenrator(a2, name3, w3)
}


else if(randomNumber>10 && randomNumber<=20){
    namegenrator(a3, name1, w1)
}


else if(randomNumber>0 && randomNumber<=10){
    namegenrator(a2, name3, w1)
}

else{
    console.log("ERROR!")
}

