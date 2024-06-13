//01 What is Express_
// Library v/s Framework
// Library - A library is a collection of pre-written code that can be used to perform specific tasks. eg-axios 
// Framework - A framework is a set of pre-written code that provides a structure for developing software appliactions. eg-express
// Express 
// A node.js web application framework that  helps us to  make web applications
// It is used for server side programming.


//02 Getting Start with Express
//Folder banaya npm init kiya ,,, express install kiya ,,, given below likha aur terminal pe dekha 
// const express = require('express')
// const app = express();     //express ko function ki tarah run kiya
// const port = 3000    //port 3000 ya 8000 mein se kuch bhi le lo
// app.istener(port,()=>{
//    console.log(`Example app listening on port ${port}`)
// })

//Ports are the logical endpoints of a network conection that is used to echange information between web server and a web client



//03 Handling requests
// app.use((req,res)=>{
//     console.log("request recived")
//  })
// ye krke agar browser mein localhost:8080 karenge to terminal(gitbash) pe rquest recived aa jaega


//04 Sending A  Response
// ye app.use ke andar hi  res.send ("hello ")  //ye likh do to localhost refresh krte hi hello aa jaega
// string ki jagh object bhi de skte hai response mein res.send({--:--,--:--})
//kuch bhi  change krte ho to phele ek baar terminal(gitbash) mein wapis node index.js likh ke browser mein localhost kro
// response json mein dkhta hai waha ... agr tum likhoo "<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li></ul>"  too mast print hoga

//05 Routing
//jese amazon mein https://amazon.com serach kiya ho home aa jaega ya fir https://amazon.com/ kiya tab bhi home hi ayega ,,, but agar https://amazon.com/mobiles kiya to mobile wala page khul jaega https://amazon.com/laptop to laptop wala page khul jaega
//essa krne ke liye app.get("<-route->",(req,res)=>{})  essse likh do
// <-route-> ki jagh "/" likh to vo default rhega ,,, "/apple" kiya to loacalhost:8080/apple likhne pe usko response ayega ,,, "*" likha to localhost:8080/something   something jo nhi specify kiya to usme * iska response ayega


//06 Installing Nodemon
// Kuch bhi changes kiye to baar baar node index.js likha padta hai ...
// Isilye nodemon install krke nodemon index.js likh diya ek baar vo khud changes track krta rahega


//07 Path Parameters
// apan "/:username"  likh ke variable bana skte hai jo bhi use enter krega uss hisab se response hoga saabka alag alag response to nhi bana skte
// jese instagram mein koi apni instagram.com/kuldeeprathore ese krke apni id search krega to kon itne sare routes banaega isiliye path paramerter de dete hai


//08 Query Strings 
// jese apan karte hai google.com/serach?q=INDvsSA to isko krne ke liye query strings use krni pagedi