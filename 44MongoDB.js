//01 What is mongoose_
//Mongoose - A library that creates a connection between MongoDB & Node.js Javascript Runtime Environment
//It is an ODM(Object Data Modeling) Library


//02 Installation
//Command propmt mein mongosh suru karo , fir installation ,connection banana suru kro
//vs code folder mein npm init , then npm i mongoose , then touch index.js
//Mongoosejs.com mein jake read the docs , side mein se quick start mein jao,

// const mongoose = require('mongoose');
// main()
// .then(()=>{
//     console.log("connection successfull")
// }).catch(err => console.log(err));
// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');
// }

//ye code copy kiya
// ye jo hai mongoose.connect('mongodb://127.0.0.1:27017/test'); isme apan connect kr rhe hai , aur  ye http://localhost:8080/ jesa hai http ki jagah mongodb ,localhost ki jgh 127.0.0.1 , 8080 ki jgh 27017 ,, fir /test likh diya test ko dbs jesa wala kuch likhte hai localhost mein
// ye asynchronous hota hai isiliye promise return krta hai isilye async await laga diye ,,
// .then().catch() ka use fir kr skte hai
// isne connect krke function call kiya main.then().catch()
// ab terminal mein node index.js likhte hi connection succesfull aa jaega
// Note apka command prompt  mein mongosh chlta rhena chiye simultaneously



//03 Schema
// ye pura bluprint hai
//Schema defines the shape of the documents within that collection.
// const userSchema = new mangoosse.Schema({
//     name : String,
//     email:String,
//     age:Number,
// });
//apan ko String Number likh rkha usme S N capiital hone chiye


//04 Models
//Model in mongoose is a class with which we construct documents.
//we can ssay used to create collection
//const User = mongoose.model("User",userSchema);
//const ke badd User likha hai vo model , aur bracket mein jo hai vo collection ka name hai
//ye krne ke badd node index.js krne ke badd
//show collections kiya to ye collection dikhega users name ka
//Apne ko naaam first letter 'capital and singular' likha hai ,,, vo khud usko plural aur first letter small kr dega
//ab ek collection bann gaya hai test mein to show dbs krne pr test likha hua bhi dikhega'


//05 Insert in Mangoose
//Inserting One
// const user1 = new User({name:"adam",email:"adam@.com",age:17});
// const user2 = new User({name:"eve",email:"eve@.com",age:19});
// user1.save() //to save in DB
// user2.save() //to save in DB
//agar save nhi kiya aur fir cmd mein db.users.find() kiya to kuch nhi dikhega 
//lekin terminal mein node likho fir  .load index.js likhoge , fir user1 likha to vaha dikhega ek id ke sath , usko save krne ke liye user1.save() ye likhna padta hai
// user1.save() ye chiz promis return krti hai to ispe then()catcch() laga skte  hai
//sab krne ke badd node index.js krna mtt bulna


//06 Insert Multiple
// User.insertMany([
//     {name:"tony",email:"tony@.com",age:50},
//     {name:"bruce",email:"bruce@.com",age:47},
//     {name:"peter",email:"peter@.com",age:30}
// ])
// ye promise hai ispe bhi thencatch laga skte hai



//07 Find in Mongoose
//Model.find()       //returns a Query Object (Mongoose Queries are not promises , fir bhi inpe .then().catch() use lr skte hai)
//EG
// User.find().then((res)=>{
//     conole.log(res);
// });
//EG
// User.find({age :{$gte:47}}).then((res)=>{
//     conole.log(res);
// });

//findOne bhi hota
//EG 
//User.findOne({age :{$gte:47}}).then((res)=>{
//     conole.log(res);
// });

//find apko array of object dega to jese age greater than karai doo object ayi to console.log(res[0].name) krrenge to first wle ka naam a jaega
//findOne object hi return krta hai to console.log(res.name) kiya to uska naam aa jaega

//findById bhi hota hai
//EG
//User.findById("65b5e1948d82d20ba7eeb177")
// .then((res)=>{
//     conole.log(res);
// });


//08 Update In Mongoose
//Mode.updateOne()
// User.updateOne({name:"bruce"},{age:49})
// .then((res)=>{
//     console.log(res)
// });
//Mode.updateMany()
// User.updateMany({age:{$gt:47}},{age:55})
// .then((res)=>{
//     console.log(res)
// });

//ye krte hai to terminal meta data console hota hai like ackowleges true , modifiedCound:1,uperserted:null......
//Hume isse kya kaam hume to jo update hua hai vo chiye


//09 FindAndUpdate
//Model.findOneAndUpdate()
// User.findOneAndUpdate({name:"adam"},{age:20})
// .then((res)=>{
//     console.log(res)
// });

//terminal mein apko adam ka purana data hi dikhega kyuki findOneAnUpdate mei find phele hai
//agaar updated dekhna hai to ({<filter>},{<update>},{<optons>}) options mein apko abb {new:true} ye likhna hai , vo by defalt false hua retta hai
// User.findOneAndUpdate({name:"adam"},{age:25},{new:true})
// .then((res)=>{
//     console.log(res)
// });

//Model.findByIdAndUpdate()
// User.findByIdAndUpdate("65b5df21e32dbcd99e888e31",{age:30},{new:true})
// .then((res)=>{
//     console.log(res)
// });



//10 Delete In Mongoose
//Model.deleteOne()   //returns count ye bhi vo acknowleged true deleted 1 wagera console krta hai 
User.deleteOne({name:"adam"})
.then((res)=>{
    console.log(res);
});
//Model.deleteManyy()   //returns count ye bhi vo acknowleged true deleted 1 wagera console krta hai 
User.deleteMany({age:{$gt:40}})
.then((res)=>{
    console.log(res);
});

//yaha bhi vhi problem hai meta data deta hai ye apne apne ko ye chiye ki kya print hua ye batae
//so we use
//Model.findByIdAndDelete()
//Model.findOneAndDelete()


//11 Schema Validations
//Basically, Rules for Schema
//Schema ko esse likhna acha reta hai 
const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required :true          //required:true   means not null kese SQL mein hota hai 
    },
    author:{
        type : String,
    },
    price:{
        type:Number,
    },
})
const Book = mongoose.model("Book",bookSchema)
let book1 = new Book({
    title:"Maths",   //agar yaha title nhi likha fir save kre to error aa jaega kyuki required true kr rkha  hhai ,,,  agar author ko nhi likhe to koi problem nhi kyuki uspe koi validation nhi hai
    author:"RD",
    price:1200       //yaha number ki jagah "abcd" ye beja string to error ayega kyuuki ye parse/cast nhi ho pata number mein ,, but string ke andar number likha"299" iss type to error nhi ayega ye convert ho jata hai
})


//12 SchemaType Options
// const bookSchema = mongoose.Schema({
//     title:{
//         type:String,
//         required :true          //required:true   means not null kese SQL mein hota hai 
//         maxLength :20,           //agr 20 se jyda store karne ki koshish kri to error aa jaega
//     },
//     author:{
//         type : String,
//     },
//     price:{
//         type:Number,
//         min:1                //agar price 1 se kaam rakenge to error aa jaega
//     },
//     discount:{                     //let book1= new Book ke andar discount nhi likhenge tab bhi ispki vallue usme 0 (defalut) store ho jeagi
//         type:Number,
//         default:0,
//     },
//     genre:[String],              //genre ke andar ab array store kara skte like we ca write genre :['comic','superhero','fiction']  in let book1= new Book({---})
//     category:{
//         type:String,
//         enum:["fiction",'non-fiction']         //agar let book1= new Book ke andar category mein inke alawa kuch aur likha to error aa jaega 
//     },
// });


//13 Vaidation in Updation_Errors
//example apan ne price min 1 kr rakhi hai pr update mein vaidation kaam nhi krta
//if we write
Book.findByIdAndUpdate("---id---",{price:-500})
//too eror nhi ayega aur -500 save ho jaega 

//but agar hum<options> jo apan ne nhi likha uski jagh {runValidators:true } kr de to error bata dega
Book.findByIdAndUpdate("---id---",{price:-500},{runValidators:true })
//ganda sa error bata dega

//but agar hum price mein validator ke sath bata de ki ye follow hi ho t kya error aye ... jese
// const bookSchema = mongoose.Schema({
//     -----
//     ----
//     price:{
//         type:Number,
//         min:[1,'too low']
//     },
//     ---
//     ---
// }),
//aur 
Book.findByIdAndUpdate(
    "---id---",
    {price:-500}
    ,{runValidators:true })
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err.errors.price.properties.message);})    //console.log(err.errors.category.properties.message)
//1 se choti price update kroge to sirf 'too low' likha hua ayega

//MONGOOSEJS.COM  MIN BHOT KUCH HSI PADHNE KE LIYE
//MONGOOSE MEIN QUICK START MEIN SETUP CODE MIL JAEGA
//SCHEMATYPES EIN VALIDATORE MIL JAENGE
//MODEL QUERY WAGERA SAB PADH SKTE HAI