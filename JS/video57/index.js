console.log("Loops tutorial")

let a=1;
for(let i=0; i<100; i++)
{
    console.log(i)
}

let Obj=
{
    name: "maaz", 
    role: "student",
    age:23
}

for (let key in Obj) {
     
       let element = Obj[key];
        console.log(key, ":")
     
}