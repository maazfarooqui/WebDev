// async function getdata(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 2000);
//     }
// )
// }

async function getdata(){

        let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let data = await x.json()
        console.log(data)
        return 490
}


async function main(){
    console.log("loading modules")
    console.log('still loading');
    console.log('now loading data');

    let newdata = await getdata();

    console.log(newdata)
    console.log("data loading finished")
    
    
}


main()