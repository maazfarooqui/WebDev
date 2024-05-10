const prom1 = new Promise((resolve, reject)=>{
        let a = Math.random();
        if(a<0.3){
            reject("No, it has been rejected")

        }

        else{

            setTimeout(() => {
                console.log("pretty much done")
                resolve("this is resolved")
            }, 1000);
        }
}
)

prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err);
    
})
