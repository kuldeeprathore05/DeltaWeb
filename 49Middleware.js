//01 What are Middlewares
//It is an intermediary
//In Express -- Middlewares in Express are the functions that come into play after thr server recieves the request and before response is sent to the client.
//Common milddleware function:
//-methodOverride
//-bodyParser
//-express.static     //app.use(express.static(path.join(__dirname,"/public")))
//-express.urlenoded  //app.use(express.urlencolded({extended:true}))

//02 Our 1st Middleware
//Middleware functions can perform the following tasks:
//-Exeute any code
//-Make changes to the request and the response objects.
//-end the request-response cycle
//-call the next middleware function in task
//1st Middleware
//app.use(middleware)
//app.use(()=>{
//     console.log(("Hi i am middleware"));
// })
//using req & res object in middleware
//app.use((req,res)=>{
//     console.log(("Hi i am middleware"));
//     resizeBy.send("bye")
// })

//Middleware agar response send kr raha hai to agge wale kuch nhi kr paenge
//Middleware ya to response bej skta hai ya next middleware function ko call kr skta hai
//Bhot se third party middleware bhi hote hai like morgon ,passport , helmet , cooki parser ... inko install krna  pdta hai



//03 Using next()
//The next middleware function is commonly denoted by a variable named next.
//app.use((req,res,next)=>{
//     console.log("First MIddleware");
//     next();
// })
//If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function.

//Agr next ke just badd like console.log("abc") essa likh diya to vo bhi print hoga console mein
// But if we write return next()  too fir return next ke badd ka print nhi hota
//app.use((req,res,next)=>{
//     console.log("First MIddleware");
//      return next();
//       console.log("abc")
// })



//04 Creating Utility Middlewares
//Logger -- Usefull info about req ko print karaenga(Third party middleware Morgon bhi logger jesa hi kaam krta hai)
//app.use((req,res,next)=>{
//     req.responseTime= new Date(Date.now()).toString();
//     console.log(req.method , req.path , req.responseTime ,req.hostname);
//     next();
// })
//ye req object mein se method path hostname sab print kara dega ... Aur Ye upar date print karane ka tarika hai


//05 Exploring app.use()
//app.use("/random",(req,res)=>{
//     console.log("I am only for random")
//     next();
// })
//ye middleware jab hi work krega jab /ramdon pe route krenge


//06 API Token As Query String
//Lets create a  middle-war for an api that checks if the excess token was passed in the query string or not.
app.use("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    else{
        res.send("ACCESS DENIED")
    }
})
app.get("/api",(req,res)=>{
    res.send("data");
});

//esse kr skte hai jese koi chiz ko secure krna hai to middleawre laga to 
// localhost8080/api   //agar koi ye route krega to access deined milegi
// localhost8080/api?q=giveaccess //ye likega to data mil jega 




//07 Passing multiple Middlewares
//const checkToken = (req,res,next)=>{
//     let {token}=req.query;
//     if(token==="giveaccess"){
//         next();
//     }
//     else{
//         res.send("ACCESS DENIED")
//     }
// }
// app.get("/api",checkToken,(req,res)=>{
//     res.send("data");
// })
//iss tarh apan middleware ko multiple jagh use kr skte hai ,, const krke /api route krne pe middleware ayega bech me



//08  Handling Errors(Express Default)
