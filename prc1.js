const prom1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        const rollno = [2,4,7,1]
        resolve(rollno)
    },5000)
    
})


async function getdata(){
    console.log("must wait for promise.. ")
    const data = await prom1;
    console.log(data,"done....")
}

getdata();