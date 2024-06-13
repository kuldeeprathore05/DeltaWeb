//01 What is State_ ?
//Stateful Protocol {interaction save hota hai}
//Stateful Protocol require server to save the status and session(interaction b/w client and server) information.
//eg - ftp(file tranfer protocol)
//Stateless Protocol {interaction save nhi hota}
//Stateless Protocol does not require server to save the status and session(interaction b/w client and server) information.
//eg - http


//02 Express Sessions
//An attempt to make our session stateful(jese amazon mein bina login kre chize cart mein save kr skte hai )
//Jese user1 ne kuch item cart me dala un item ko server sessionID de deta hai usme store hote hai , aur client ke pass vo Id jati hai
//SessionId cookie  mein store kara skte hai
//ye databasse mein isilye store nhi kaarte bcoz it is not permanent data

//npm install express-session (can read doc on npm website)
const session = require("express-session")
app.use(session({secret : "mysupersecret"}));
app.get("/test",(req,res)=>{
    res.send("test successfull")
})
//test pe route krne pr ek cookie store ho jaegi connect.sid (sid == sessionID)


//03 Exploring Session
app.use(session({
    secret : "mysupersecret",
    resave:false,                  //you can read about resave and saveUninitialized in its npm
    saveUninitialized:true,
}));
//to count number of req
app.get("/reqcount",(req,res)=>{
    if(req.session.count){              //req.session ko print karaoge to ek object print hoti hai jisme cooki hoti hai ,, usme count variable banaya
        req.session.count++;
    }
    else{
        req.session.count = 1;
    }
    res.send(`you send a request ${req.session.count} times`)
})
//ye count kregaa kitni baar reqcount wale route pe req beji




//04 Storing_ Using Session Info
app.get("/register",(req,res)=>{        //query se name lenge like localhost:8080/register?q=kuldeep ispe request bejega
    let {name="anonymous"} = req.query;    //agar /register pe hi req beji to default anaonymous hoga.
    req.session.name =name;       //req.session ko print karaoge to ek object print hoti hai jisme cooki hoti hai ,, usme name variable banaya
    res.redirect("/hello")
})
app.get("/hello",(req,res)=>{
    res.send(`hello ${req.session.name}`)
})


//05 Using connect-flash
//The flash is a special area of the session used for storing messages . Messages are written to the flash and cleared after being displayed to the user.
//npm i connect-flash (read doc in npm)
const flash = require("connect-flash")
app.use(flash());
app.get("/register",(req,res)=>{      
    let {name="anonymous"} = req.query;    
    req.session.name =name;       
    req.flash("success","user is registered")   //     req.flash("<key>","<message>")   
    res.redirect("/hello")
})
app.get("/hello",(req,res)=>{
    res.render("page.ejs",{name : req.session.name ,msg: req.flash("success")}) //render karaya aur name , msg bej diya template pe , page.ejs mein <%=%> isme krki print kara denge
})



//06 Using connect-flash
//res.locals = set variables accessible in templates rendered with res.render (apan res.render ke sath joo sab bejte hai template mein vo unko alag se res.local se bej do)
//like
app.get("/hello",(req,res)=>{
    res.locals.msg = req.flash("success")
    res.render("page.ejs",{name : req.session.name}) //render karaya aur name , msg bej diya template pe , page.ejs mein <%=%> isme krki print kara denge
})
//inka alag se middleware bhi bana skte hai
app.use((req,res,next)=>{
    res.locals.successMsg = req.flash("success")
    res.locals.errorMsg = req.flash("error")
    next();               //next krna mtt bulna
})
app.get("/register",(req,res)=>{      
    let {name="anonymous"} = req.query;    
    req.session.name =name; 
    if(name =="anonymous"){
        req.flash("error","user is not registered")
    }  
    else{
        req.flash("success","user is registered") 
    } 
    res.redirect("/hello")
})
app.get("/hello",(req,res)=>{
    res.render("page.ejs",{name : req.session.name }) //render karaya aur name , msg bej diya template pe , page.ejs mein <%=%> isme krki print kara denge
})
//page.ejs pe <%=successMsg%> <%=errorMsg%> <%=name%> //  ye sab likh denge 
//localhost:8080/register kiya to user not reqgistered anonymous aa jaega 
//localhost:8080/register?q=Kuldeep kiya to user registered Kuldeep aa jaega


//07 Implement Sessions in Project
//cookie-session lagao Airbnb mein


//08 Cookie in SessionOptions
const session = require("express-session")
const sessionOptions = {
    secret : "mysecretcode",
    resave : false,
    saveUninitialized : true,
    cookie:{
        expires : Date.now() + 7 * 24  * 60 * 60 * 1000 , // 7 days in milliseconds
        maxAge : 7 * 24  * 60 * 60 * 1000,
        httpOnly : true
    }
}
app.use(session(sessionOptions));

app.get("/test",(req,res)=>{
    res.send("test successfull")
})
//yaha cookie ki expire date bhi likhni reti hai verna browser tab band krte hi delete kr deta hai ,,
//ye expires , maxage likh di milliseconds mein , httpOlny true krna hota hai for security purpose



//09 Important Flash in Projects


//10 FLash Success Includes
//includes mein flash.ejs banaya usme flash msg print karaenge 
//flash.ejs mein 
// <% if(success&& success.length) { %>        //success name ka msg to hoga hi but uski length bi ho tab ye aa jaega matlab usme sucees wala msg(like listing deleted , added) bhi ho
//    <div > success</div>
//    <button
//       type="button"
//       class="btn-close"
//       data-bs-dismiss="alert"
//       areal-label="Close"
//    ></button>
//    </div>
// <%  { %>
//ye esse banake classes wagera bootsrap se copy kr liye taki flash ayega usko cross krke dismis bhi kr ske



//11 Flash Failure Includes
//jese koi listing delete ho gyi fir bhi koi ussi listing pe show krne ki kosish kr rha hai hai to
//IN show route 
if(!listing){
    req.flash("failure","Listing you requested does not exist")
    res.render("/listings")     //wapis listings pe hi aa jaega
}

app.use((req,res,next)=>{
    res.locals.faiure = req.flash("failure")
    next()
})
//flash.ejs mein 
// <% if(failure&& failure.length) { %>      
//    <div > success</div>
//    <button
//       type="button"
//       class="btn-close"
//       data-bs-dismiss="alert"
//       areal-label="Close"
//    ></button>
//    </div>
// <%  { %>