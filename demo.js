// async await both are keywords

// async is  return a promise always remember this thing

// await keyword makes  js wait until that promise  settles and returning it's result

// jo async k sath ek function hota h wo ek promise return krta h.

// without promise we cann't do async await

//without async function cann't use await...

// and async await cann't use without promise

// await is used to wait for a promise to resolve or reject, 

//and can only be used inside an asynchronous function.



const promise = new Promise((resolve, reject) => {
    const num = 26;
    console.log("Neayadav")
    if(26 + num == 52){
        console.log("before resolve param")
        resolve ("addition was correct")
        console.log("after resolve param")
    }else{
        reject("addition was not correct")
    }
})


async function firstfun(){
        console.log("before promise done....");
        const data2 = promise.then((data1) => {console.log(data1)}).catch((err) => {
            console.log(err)
        })
        const data = await data2;
        return data
}

a = firstfun()
console.log(a)