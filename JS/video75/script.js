    console.log("maaz")
    console.log("aby")

    setTimeout(()=>{
        console.log("i am inside timeout")
    }, 0)

    console.log("inten")

    const callback= (arg)=>{
        console.log(arg)
    }


    const loadscript= (src, callback) => {

        let sc =  document.createElement("script")
        sc.src= src
        sc.onload = callback("example of callback")
        document.head.append(sc)
        
    }

    loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
    