//01 JS Call Stack
//LIFO = Last In First Out (jo last mein andar jaega vo sabse phele bahar ayega)
// Stack is like plates arranged in order ek ke upper ek ,,, jo last mein uper rkhi vhi phele niklgi...
//Function ki calling stack ki form mein stored hoti hai
function hello(){
    console.log("Inside hello funx ")
    console.log("Hello")
}
function demo(){
    console.log("Calling hello funx")
    hello();
}
console.log("Calling Demo funx")
demo();
console.log("Bye")
//data structure hai track krta hai konse function ki call chal rhi hai ,, 


//02 Visualising Call Stack
function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans = two()+one()
    console.log(ans)
}
three();


//03 BreakPoints
//Sorces ke andar jake breakpoint select fir refresh


//04 JS is Single Thraeded
//line se  chalti hai js but agar khi settimout laga diya to phele niche ko ecxecute hoga fir ye to ye asyncrnous nature ho gaya jo apne ko pdna hai
//asyncrnous nature se kusch  problems atti jese callback hell


//05 Callback Hell
let h1 = document.querySelector("h1")
// setTimeout(()=>{h1.style.color ="red"},1000)
// setTimeout(()=>{h1.style.color ="green"},2000)
// setTimeout(()=>{h1.style.color ="blue"},3000)
//------------------------------------------------
// function changecolor(color,delay){
//     setTimeout(()=>{
//         h1.style.color=color},delay)
// }
// changecolor("red",1000);
// changecolor("blue",2000);
// changecolor("green",3000);
//------------------------------------------------
// function changecolor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color
//         if (nextColorChange) nextColorChange()
//     },delay)
// }
// changecolor("red",1000,()=>{
//     changecolor("orange",1000,()=>{
//         changecolor("yellow",1000,()=>{
//             changecolor("blue",1000)
//         })
//     })
// })
//This is known as callback hell  (nested callbacks)...Promises,async,awake callback hell se bachne ke liye hote hai


//06 Setting Up For Promises
// function saveDB(data,sucsess,failure){
//     let speed = Math.floor(Math.random()*10+1)
//     if(speed >4){
//         sucsess();
//     }
//     else{
//         failure();
//     }
// }
// saveDB(
//     "Kuldeep",
//     ()=>{
//         console.log("your data is saved");
//     saveDB("Hemant",()=>{
//         console.log("Sucsess2 ,data saved");
//         saveDB("Hii",()=>{
//             console.log("Sucsess3,data saved")
//         },
//         ()=>{
//             console.log("failed")
//         })
//     },
//     ()=>{
//         console.log("Data not saved")
//     }
//     )
// },
//     ()=>{
//         console.log("Poor connection")
//     }
// )
//line 73 -103 kharatnak code callback hell
//Yaha ye data save krne ke liye banaya aur callback hell ho gaya


//07 Refactoring With Promises
//Promises = The promise object represents the eventutal completion(or failure) of an asychronous operation and its resulting value.
//reolve & reject (success & failure)
function saveDB(data){
    return new Promise((resolve,reject)=>{
        let speed = Math.floor(Math.random()*10+1)
        if(speed>4){
            resolve("Data saved");
        }
        else{
            reject("Data not saved");
        }
    })
}
//Console mein likh do saveDB("..") waha saved not saved aa jaega 
//Type of Promisestate - fulfilled , pending , rejected



//08 then() and catch() method
//agar fulfilled hone ke badd kuch kaam kre to then ,,, rejected hone ke badd kuch kamm kre to catch
let request = saveDB("Hiii");  //request is a promise object here
request.then(()=>{
    console.log("promise is resolved")
    console.log(request)
})
.catch(()=>{
    console.log("promise is rejected")
    console.log(request)
})
//orrrrrrr
saveDB("HIIIII").then(()=>{
    console.log("promise is resolved")
    console.log(request)
})
.catch(()=>{
    console.log("promise is rejected")
    console.log(request)
})


//09 Promise Chaining
saveDB("hii")
.then(()=>{
    console.log("Data1 saved");
    return saveDB("How are you");
})
.then(()=>{
    console.log("Data2 saved");
    return saveDB("I am fine");
})
.then(()=>{
    console.log("Data3 saved");
})
.catch(()=>{
    console.log("Data not saved");
});


//10 Results _ Errors in Promises
//promises are rejected and resolved with some data (valid results or errors) 
saveDB("hii")
.then((result)=>{
    console.log("Data1 saved");
    console.log(result);
    return saveDB("How are you");
})
.then((result)=>{
    console.log("Data2 saved");
    console.log(result);
    return saveDB("I am fine");
})
.then((result)=>{
    console.log("Data3 saved");
    console.log(result);
})
.catch((error)=>{
    console.log("Data not saved");
    console.log(error)
});



//11 Refactoring Old Code
function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color
            resolve("color changed")
        },delay)})
}
    
changecolor("red",1000)
.then(()=>{
    console.log("red color was completed")
    return changecolor("orange",1000)
})
.then(()=>{
    console.log("orange color was completed")
    return changecolor("blue",1000)
})
.then(()=>{
    console.log("blue completed")
})