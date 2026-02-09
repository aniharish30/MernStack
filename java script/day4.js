// const add = (a , b)=>{
//     console.log("Added Value " , a+b);
    
// }

// const sub = (a, b)=>{
//     return a-b;
// }
// add(6,sub(20,5))


//Schedulers  

// 1. setInterval


// var set = setInterval(()=>{
//     console.log("Hello World")
// } , 1000)

// // 2. setTimeout
// setTimeout(()=>{
//     clearInterval(set)
// } , 4000)
 const add = (a, b) => {
   console.log("Added Value " , a+b);
}

const sub = (a, b) => {
    return(a-b);
}
add(5, sub(20, 5))

//Schedulers  
// 1. setInterval
var set= setInterval(()=>{
    console.log("Hello World")
}, 1000)
 
// 2. setTimeout
setTimeout(()=>{
    clearInterval(set)
}, 20000)