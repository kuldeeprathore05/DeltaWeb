//01 Authentication v/s Authorization
//Authentication is the process of verifying who someone is
//Authorization is the process of verifying what specific applications , files and data a user has access to

//03 How are password stored_
//We NEVER store the password as it is . We store their hashed form.



//03 Hashing
//For every input , there is a fixed output
//They are one-way functions , we can't get input from output
//For a different input , there is a different output but of same length
//Small changes in input should bring large changes in output 
//SHA-256 Hash Generator (isko use nhi krte kyuki ye alogrithm fast hai , to hacker ko bhi commonly used password try krne mein aasani hoti hai)



//04 What is Salting_
//Password salting is a technique to protect passwords stored in databases by adding a string of 32 or more characters and  the hashing them.
//Jese kisi ne common password use kiya , hacker attack krega commmon password try krega tab bhi kuch nhi kr paega vo kyuki , salting se apne common passord mein kuch aur add hua aur hashing uski hui hai


//05 Passport
//passport.org//packages/ ye website pe bhot sari strategies milti hai ki username-password google amazon github kis se signup llogin karana chahte
//Apan basic username password wala dekhte hai which is passport local
//npm i passport            ..ye app.js mein require krenge generally
//npm i passport-local           ..ye app.js mein require krenge generally
//npm i passport-local-mongoose     ....ye models mein require krenge generally
//ye teeno npm pe dekh skte ho , aur ye teeno install krne hai


//06 User Model
//user : username,password,email
//You're free to define your User how you like. Passport-Local Mongoose will add a username, hash and salt field to store the username, the hashed password and the salt value.
//Apne ko bass email store karwana hai username password vo khud define wagera kr deta hai
//EG
//model mein user.js banaya ye likha
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const User = new Schema({});
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);


//07 Configuring Strategy
//In app.js
const passport = require("passport")
const LocalStrategy = require("passport-local")
const User = require(".models/user.js")
//ab niche wala jaha session and flash use kiya[app.use(session(sessionOptions);app.use(flash()))] hai uske badd likhna kyki jo llikhenge usme bhi session  use  hota hai
app.use(passport.initialize());          //a middleware that intializes passport.
app.use(passport.session());             //A web application nneds the ability to identify users as they browse from page to page. This series of requests and responses, each associated with the same user, is known as a session
passport.use(new LocalStrategy(User.authenticate()));    //generates a funtion that is used in Passport's LocalStrategy

passport.serializeUser(User.serializeUser());           //generates a funtion that is used by Passport to serialize(store) users into session
passport.deserializeUser(User.deserializeUser());       //generates a funtion that is used by Passport to deserialize(unstore) users into session

//niiche ke teen passport-local-mongoose mein mil jaenge npm ki website pe
//Uske uper ke do passport mein mil jaenge npm ki website pe


//08 Demo User
app.get("/registerUser",async(req,res)=>{
    const fakeUser = new User({
        email:"student@email.com",
        username:"delta"
    });
    let newUser = await User.register(fakeUser,"helloword")     //User.register(<user>,"<password>") passport-local-mongoose mein  static methods ke  andar mil jaega ye  bhi npm mein
    res.send(newUser)
})



//09 SignUp User
//GET   /signup
//POST  /signup


//10 SignUp User



//11 Login User
//GET /login
//POsT /login
router.post(
    "/login",
    passport.authenticate("local",{
        failureRedirect:"/login",
        failureFlash:true,
    }),async (req,res)=>{
        req.flash("success","Welcome to wanderlust! You are logged in!")
        res.redirect("/listings")    }
)
//ye  login krne ke  liye post route hai
//passport.authenticate(Authenticate  request) ye hai ye local kr diiya aur  agar galat login(failure) hua to wapis login pe redirect kr dega
//failureFlash mtlb galat login pe flash msg bhi khud hi show kr dega


//READ PASSPORT NPM CAREFULLY