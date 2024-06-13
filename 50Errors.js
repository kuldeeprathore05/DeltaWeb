//01 Error Handling Method
//default error handling express ki website pe dekh skte hai /express default error handler ye search krke
app.use((err,req,res,next)=>{
    console.log("-----ERROR-----");
    next(err);      //agar yaha sirf next() likhte to ye next non error handling ko call lagega // but next(err) likha to next error handdling middleware ko call lagaga
})
//ye err ke llike middleware hai


//02 Custom Error Class
//HTTP status code you can check on mdn
class ExpressError extends Error {
    constructor(status , message){
        super();
        this.status =  status;
        this.message = message;
    }
}
//apan ek alag file ExpressError mein ye likh ke module.exports = ExpressError //Aur app.js mein require  const ExpressError = require("./ExpressError")
// throw new Error("ACCESS DENIED") ke jagh 
throw new ExpressError(401,"ACCESS DENIED")   // ye likhenge
//inspect mein console mein dekhoge to abb apka custom error dikhega 401 ACCESS DENIED ,,,,throw new Error("ACCESS DENIED") ye krte the to 500 likha hua dikhta tha,,, but we can se our custom
//res.err krege app.use((err,req,res,next)) iske andar to object aa jaegi but hume object nhi chahiye niche likhe hue se sirf error hi dikega


//03 Default Status_Message
app.use((err,req,res,next)=>{
    let {status =500,message="SOME ERROR"}=err;    //humne error rxtract kiya agar uska koi status nhi hua to by default 500 set hho jaega
    res.status(status).send(message);
})

//04 Activity
//Create an admin route & send an error with a 403 status code
// app.get("/admin",(req,res)=>{
//     throw new ExpressError(403,"Access is Forbidden")
// })
// app.use((err,req,res,next)=>{
//     let {status =403 ,message ="Some error Occured"}=err;
//     res.status{status}.send{message};
// })


//05 Handling Async Erros
//Example like in our Whatsapp Poject 
//Show Route waha  apna async function tha ... to waha kisi ne galat id pe show krne ki koshish kri to error kese throw kre
app.get("chats/:id",async(req,res,next)=>{
    let {id}=req.params;
    let chat = await Chat.findById(id)                   
    if(!chat){
        return next(new ExpressError(404,"Chat not Found"))      //async mein return next(---) krna padta hai
    }
    res.send("edit.ejs",{chat})
})
//async function mein error throw next ke andar krna hai
//isme id galat likho but same length ki to ye error sambhal lega
//but id length diferent likhi to ye error nhi smabhalega
//like coorect id" abcd1234" iss type mein hai app ne "xyzw6789" ye likha to ye handle krega ,, but "cdaeu4557" isme hanfle nhoi krega

//****************************** */
//Hum ek EXpressError.js mein Express error define krte hai , index/app.js mein error handling midlleware banate hai ,, aur route mein throw express error likhte hai..
//****************************** */

//06 Using try_catch
//EG whatsapp hi
//agar whatsapp mein new msg mein to from msg teeno ko khali chod ke submit kr de to error ayega ,, teeno required thii ,, vo save kesee krega ab ,, to uske liye error handler chiye
//Error handing middleware create kr liya
app.use((err,req,res,next)=>{
    let {status =500,message="SOME ERROR OCCURRED"}=err;
    res.status(status).send(message);
})
//sabhi async function ko try catch mein band kr do
// app.---("---",async(req,res)=>{
//     try{
//         ----
//     }
//     catch(err){
//         next(err)
//     }
// })
//agar kuch validation error ,,, jese new banai aur required chiz ko value nhi dii ,, id galat length ki likh di



//07 Using wrapAsync
//try-catch se code similar sa messy sa ho jata hai isilye wrapsync use krte hai..
//try-catch ki jagah ye wrapAsync ko define krke use kr lete haii
function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=> next(err))
    }
}
// isko usse krlo fir asunc routes mein
// app.get("---", 
// asyncWrap(async(req,res)=>{
//     ---
//     ---
//     ---
// }))



//08 Mongoose Errors
//Error ka naam batane ke liye
// ek error handlar bana denge
const handleValidationErr = (err)=>{
    console.log("Validation error occurred");
    console.dir(err.message)           //err kr message ko bhi print kara skte hai
    return err;
}

app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name === "ValidationError"){
        err  =handleValidationErr(err);   //ye uper wale ko call krega agar validation error hua to
    }
    next(err);
})