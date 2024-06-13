//01 async functions
//async function returns promise
async function say(){
    throw "some error"     //throw used to give an error  //console mein say() likoge to error aa jaega some error nam se 
    return "hello"
} 
say()
.then((result)=>{
    console.log("Promise was resolved")
    console.log("result was :", result)
})
.catch((err)=>{
    console.log("Promise is rejected")
    console.log(err)
})
//Similarly arrow function mein bhi async use kr skte hai
let demo = async()=>{
    return "hello"
}


//02 await keyword
// h1 = document.querySelector("h1")
// function change(color,delay){
//     return new Promise((resolve,rejet)=>{
//         setTimeout(()=>{
//         h1.style.color = color;
//         console.log(`color changed to ${color}`);
//         resolve("color changed")
//     },delay) 
//     })
   
// }
// async function cc(){
//     await change("red",1000);
//     await change("blue",1000);
//     await change("green",1000);
// }
// cc();


//03 Handling Rejections
h1 = document.querySelector("h1")
function change(color,delay){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{   
        let num = Math.floor(Math.random()*5)+1;
        if(num>3){
            reject("promise rejected");
        }

        h1.style.color = color;
        console.log(`color changed to ${color}`);
        resolve("color changed")
    },delay)   

        
    })
   
}

async function cc(){
    try{
           await change("red",1000);
    await change("blue",1000);
    await change("green",1000); 
    }
    catch(err){
        console.log("error found")
        console.log(err)
    }

    let a=5
    console.log(a)
}
cc();
//await ko try-catch mein likh denge to error pata chal jaega aur rejected ke badd wala bhi executte hoga


//04 What is an API(Appliaction Programming Interface)
//API se data atta hai JSON format mein


//05 Accessing some APIs
//Some Random APIs 
//      https://catfact.ninja/fact (sends randon cat facts)
//      https://www.boredapi.com/api/activity  (sends an activity to do when bored)
//      https://dog.ceo/api/breeds/image/random   (sends cute dogs pictures)
//      https://icanhazdadjoke.com   (sends jokes)


//06 What is JSON(JavaScript Object Notation)
//is is like object in js but yaha undefined namm ki koi chiz nhi hoti

//07 Accessing JSON data
//    JSON.parse(data)Method                   //json data -> object
//    To parse a string data into JS object
//    JSON.stringify(json)Method               //js object -> json data 
//    To parse a JS oobject into JSON
let respond = '{"fact":"Cats control the outer ear using 32 muscles; humans use 6","length":57}'
console.log(respond)
let validRes = JSON.parse(respond)
console.log(validRes)
console.log(validRes.fact)


//08  API tetsing tools
// 1) Hoppscoth (online tool https://hoppscotch.io)
// 2) Postman (to use it you need to install it)


//09 What is Ajax
//Ajax(Asynchronous Javascript and XML)
//API ko call krte hai request bej hai to respond atta hai JSON mein  (phele XML mein atta tha) isme time bhi lag skta hai isilye asynchronous


//10 Https Verbs
//example  - get , post , delete  (abhi hum get ke sath hi deal krte hai)



//11 Status Codes
//Examlpes:
// 200 - OK
// 404 - Not Found
// 400 - Bad Request
// 500 - Internal Server Error
// informational responses(100-199) //1 se suru hone wale
// successfull responses (200-299)  //2 se suru hoen wale
// redirecton responses (300-399)   //3 se suru hoen wale,, dusre page pe redirect kr dete hai
// client error rsponses (400-499)  //4 se suru hoen wale
// sever error responses (500-599)  //5 se suru hoen wale


//12 Adding Informations in URLs
//Query strings
// https://www.google.com/serch?q=harry+potter 
// yaha /search se searh pe redirect hua ,,, q is key and harry+potter is value ,, harry potter search kr dega 


//13 Https Headers
// Apan ko request krte hai uske sath key value pairs bejte hai ki hume kesa respond chayie 
// header mein jake header 1 mein accept likh diya ,, fir value 1 we can write
//  text/html - HTML response (default response format)
//  application/json  (JSON response)
//  text/plain - Plain text respone


//14 Our First Request
let url = "https://catfact.ninja/fact";
fetch(url)    //iss request ko inspect mein network mein dekh skte ho aur waha iska response bhi dikh jaega,,,,it is a promise therfore we can use then catch
.then((res)=>{
    console.log(res)
    return res.json();      // agar readable data chiye to .json ko return kara lo vo bhi promise hai uspe bhi then laga do
})
.then((data1)=>{
    console.log(data1)
    return fetch(url);
})                                   //esse promise chaning kr skte hai
.then((res)=>{
    return res.json();
})
.then((data2)=>{
    console.log(data2)
})
.catch((err)=>{
    console.log("ERROR -", err)
}) 


//15 Using Fetch with async-await
let link = "https://catfact.ninja/fact";
async function getfacts(){
    try{
        let res = await fetch(link)
        let data = await res.json();
        console.log(data.fact);             //data ek object data.fact se sirf fact hi print hoga

        let res2 = await fetch(link)
        let data2 = await res2();
        console.log(data2.fact);   
    }
    catch(e){
        console.log("error -" , e);
    }
}
// console ke andar getfacts(); likh doo two fatcs will come
let api = "https://api.potterdb.com"
fetch(api);