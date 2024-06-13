//Videos thodi uper niche hai but first four video mein Express route ke bare me bataya the restructuring listing then restructuring reviews

//01 What is Express Router_
//make folder routes folder -> make listing.js file in it
//then cut paste all create show edit delete route in listing.js 
//replace app.get by router.get and remove "/listing" from all routes
//cont router = express.Router({mergeParams : true}) in listing.js
//Write module.exports = router in listing.js at end 
// just write ->const listing = require("./routes/listing.js") and  ->app.use("/listings",listings) in app.js  
// require all immportant routes in listing.js also


//02 Using Express Routes
//Reviews ki liye bhi ye krenge
//routes se common part hata skte hai to "/listings/:id/reviews" vo common hai ussse hata ke 
//app.use("/listings/:id/reviews",reviews) ye  likh dnege app.js mein
//also in app.js write -> const reviews = require("./routes/listing.js",reviews)

//const router = express.Router({mergeParams : true})  // dono jagh meregeParams likha taki parent(listing.js) and child(reviews.js) donoo me sambannd bana rhe
//Write module.exports = router in reviews.js


//03 
//Express Router are a way to organize your Express application such that our primary app.js file does not become bloated.
//const router = expess.Router()  // creates new router object



//04


//05 Web Cookies
//HTTP cookies are the small blocks of data created by a web serve while user is browsing a website and placed on the user's computer or other device by the user's web browser.
//You can read about it on Wikipedia HTTP Cookies
//Inspect mein element console source network ke side mein Application hota hai , usme Cookies mil jaenge
//ye name-value pair mein store hote hai


//06 Sending Cookies
app.get("/setcookies",(req,res)=>{
    res.cookie("greet","namaster");   //res.cookie("<name>","<value>")
    res.cookie("origin","India");
    res.send("We sent you a cookie");
})
//ye app.js mein likh diya to agar ek baar localhost:8080/getcookies pe gye to ye name-value pairs store ho jaenge haar route ke liye 


//07Cookie Parser
//cookies req mein store hoti hai so we can access it in any route by writing console.dir(req.cookie)
//but for it we need cookie parser
//npm i cookie-parser
//const cookieParser = require("cookie-parser")
//app.use(cookieParser)
//ab kisi route mein console.dir(req.cookie) krne se terminal pe name-value print hoga
//EG
app.get("/greet",(req,res)=>{
    let {name="anonymous"} = req.cookies;  
    res.send(`HI, ${name}`)
})
//jese koi cookie store  hai name:'kuldeep'(yaha name name hai , value kuldeep hai) to greet pe route krne se HI kuldeep print ho jaega
//agar koi pair set nhi kiya to default HI anonymous aa jaega
//EG
app.get("/greet",(req,res)=>{
    let {city="Delhi"} = req.cookies;  
    res.send(`Welcome to ${city}`)
})
//jese koi cookie store  hai city:'kota'(yaha name city hai , value kota hai) to greet pe route krne se Welcome to Kota print ho jaega
//agar koi pair set nhi kiya to default Welcome to Delhi aa jaega





//08 Signed Cookies
//Apan ne cookie banai pr koi bhi inpect mein appliaction mein jake manuually change kr skta hai 
// To ye krenge
// Send Signed Cookie
app.use(cookieParser("secretcode"));
app.get("/getsigedcookie",(req,res)=>{
    res.cookie("color","red",{signed:true})     
    res.send("done!");
});
//{signed:true} likh diya aur app.use(cookieParser("secretcode")); ye ek value ko raw form mein nhi bejta uske sath extra code bej deta hai  
// Verify Signed Cookie
app.get("/verify",(req,res)=>{
    console.log(res.cookies);   //ye sirf unsigned cookie show krega
    console.log(res.signedCookies); //ye signed cookies bhi batayega but agar kisi mein usko tamper(manually badal diya) to usko show nhhi krega
});

