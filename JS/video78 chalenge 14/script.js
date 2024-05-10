const addItem = async (item)=>{
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)

}

const randomDelay=()=>{
    return new Promise((resolve, reject)=>{
        timeout = Math.random()*7;
        setTimeout(()=>{
            resolve()
        }, timeout*1000
    );
    })
}

async function main()
{
   let t=  setInterval(()=>{
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1]
        if(last.innerHTML.endsWith("..."))
            {
                last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
            }

            else{
                last.innerHTML = last.innerHTML + "."; 
            }
       
    }, 300);

    let text = [
        "Initialising Hacking", 
        "Reading Your System Files", 
        "Password Files Detected", 
        "Sending All files and Passswords to server", 
        "Cleaning Up"
    ]
    
    for (const item of text) {
         await addItem(item)
    }

    await randomDelay();
    clearInterval(t);
}

main()



