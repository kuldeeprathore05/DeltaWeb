// 01 What are Templating
// EJS (Embeddedd JavaScript Templates)
// EJS is a simpe templating language that lets you generate HTML markup with plain JavaScript.
// Make dir ,,, npm init ,,, npm install express ,,, npm install ejs ,,, create  index.js ,,, write basic code like require port ..,, Use nodemon


//02 Using EJS
//views naam ka folder usme home naam ka html .
// app.set("view engine","ejs");
// app.get("/",(req,res)=>{    //har baar koi string object hi nhi bejenge kuch bada bejna hai isilye render kiya
//     res.render("home.ejs");     //isme ejs file bejte hai aur sari ejs files ek views naam ke folder mein honi chyie
// });                               //express views directry ke andar jake home.ejs dundta hai



//03  Views Directory
// app.set("views",path.join(_dirname,"/views"))
// const path = require("path");
//Ye doo lines bhi likhni padegi taki kisi bhi directory se render kre to error na aye





//04 Interpolation Syntax
//Interplolation refers to embedding expressions into marked up text.
//ejs.co ki website pe tagss mil jaenge
// <%=  %>  ye use krte hai to output the value into template(HTML escaped)




//05 Passing data to EJS
//app.get ke andar jese apna database likh diya like , let DiceRoll = Math.floor(Math.random()*6)+1
// res.render ke andar ek key-value pair dena padega like , 
// res.render("rolldice.ejs",{work : DiceRoll})  aur fir ejs mein key likh doo...
// if our key value pair ka naam same hai to res.render("rolldice.ejs",{DiceRoll}) itna bhi likh skte hai



//06 Instagram Ejsapp.get("/ig/:username",(req , res)=>{
//     let {username} = req.params;
//     res.render  ("insta.ejs",{username});
// })
// Ye likh diya aur insta.ejs naam ki  file bana di views folder ke andar



//07 Conditional Statements in EJS
//  <% %> 'Scriptlet tag , for control flow , no output.
// <% if(dice == 6){ %>
//     <h2>Nice ! Roll Dice Again</h2>
//     <% }  %>
// Condition ko apan ne <%%> mein likha aur <h2>Nice ! Roll Dice Again</h2> isko esse hi kyuki ye simple html hai 
// jab condition true hogi bich ka html execute ho jaega .



//08 Loops
// app.get("/ig/:username",(req , res)=>{
//     let {username} = req.params;
//     const followers = ["rohit","kl","virat","dhoni"]
//     res.render  ("insta.ejs",{username, followers});
// })
// follower naam ka array banaya aur usse bhi render kiya
// <%for(name of followers){%>
//     <li><%=name%></li>
// <% } %>
// insta.ejs mein ye likha yaha name ek variable tha na ki ko html code isiliye <%= %> ye use kiya aur baki loop mein  <% %> ye use kiya 


// 10 Instagram Page with EJS
// Data de rakha tha vo laye lec09 mein  manlo database mein data de rkha hai ... 


//11  Serving Static Files
// app.use(express.static(folder.name))
//public naam ka folder hona chyiye
// public mein jese koi css files banai , eg instagram ke liye banai
// too insta.ejs mein jake <link rel="stylesheet" href="/style.css" />  yee likha padega
// app.use(express.static(path.join(__dirname,"/public"))) ,, ye likhe se kisi aur directry se bhi khol skte hai isko
// maan lo public mein do directory aur hai ek css aur ek js too
// app.use(express.static(path.join(__dirname,"/public/css")))
// app.use(express.static(path.join(__dirname,"/public/js")))
///esse likh do


//12 Inculdes
// Agar app chahte ho ki kuch chiz har template mein ho to uska subtemplate bana do
// ek folder bnao includes naam ka usme jese sabme html ka boiler code likh doo includes mein ek file bana ke head.ejs naam ke usme upper wala code likh diya 
// fir jisme bhi chayie vo code usme ek line likh do bas
// <%- include("includes/head.ejs"); %>
// <%- %>  Outputs the unescaped value into template
