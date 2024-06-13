


//01 Form Validation
//When we enter data in the form , the browser and/or the web server will check to see that the data is in the correct format and within the constraints set by the application.
//input ke andar required likh denge jisme hi agar hum usme value nhi daal ke sumbitkrne ki koshish krenge to d/f browser mein d/f tarike se bolega ki fill this also..\
//agar hume khud ka chize tho bootstrap mein form mein validation mein dekho
//form mein novalidate likha ,form ko class di jesa bootstrp mein diya hai vese, niche se javascript copy kri aur public mein js naam se script.js bana lo usme store kr /


//02 Sucess-Failure
//<div class="valid-feedback">Title looks good!</div>
//<div class="invalid-feedback">Enter valid input!</div>
//input ke niche ye div laga ke user ko bata skte hai

//03 Custom Error Handlers
// app.use((err,req,res,next)=>{
//     res.send("Something went wrong")
// })
//ye likh ke CRREATE mein try catch daala

//04 Add WrapAsync
//try catch ko likhne ka better way 
//Utils naam ka folder bana ke usme WrapAsync ke andar ye likha
module.exports = (fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch(next);
    }
}
//app.js mein require krke
//Async function ki agge WrapAsync likh denge



//05 Add ExpressError
//Uils mein ExpressError.js mein ye likha
class ExpressError extends Error{
    constructor(status){
        super();
        this.statusCode = this.statusCode;
        this.message = this.message
    }
}
module.exports= ExpressError;
//fir app.js mein ye likha
app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"PAge Not Found"));
})

app.use((err,req,res,next)=>{
    let {statusCode , message}=err;
    res.status(statusCode).send(message);

})
//Agar kisi aur jagh render kiya to acche se error ayega


//06Error.ejs
//Ek error.ejs naam ki template bana lenge aur usme bootstrap mein se code le ayenge alert ka                  
//
app.use((err,req,res,next)=>{
    let {statusCode , message}=err;
    res.render("error.ejs",{message});
})
//esse app.js mein likhenge aur error.ejs naam ki ek file bana lenge usme bootsrtap ka code aur <&-message &> bhi show kr skte 




//07 Validation for Schema
//Jese koi nyi lsiting bana raha hai too agar usne description , title , loaction , inme se kuch nhi dala to error anna chiye
if(!newListings.description){
    throw new ExpressError (400,"Description is missing")
}
//esse title price location country sbke liye likhna padega ...
//Therefore we use npm package JOI
//***JOI***//
//you can read on joi.dev website
//install joi
//make a new file schema.js , then require joi in schema.js
module.exports listingSchema = Joi.object({
    listing:Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
        location:Joi.string().required(),
        country:Joi.string().required(),
        price:Joi.number().required().min(0),
        image:Joi.string().allow("",null),
    }).required
})
//then isko app.js mein require kr lo listingSchema ko
//Now in app.js create route mein
//agar kuch fill nhi kiya au submit kiya tho joi terminal mein batata hai ki validation error , ye ye error hai
let result = listingSchema.validate(req.body);
console.log(result)
if(result.error){
    throw new ExpressError(400,result.error)       //agar result mein error hua to ye if true hooga aur error throw hoga
}
//agar kuch fill nhi kiya au submit kiya tho joi terminal mein batata hai ki validation error , ye ye error hai


//Error kese throw hoga--yaha if true hhoga vo ExpressError throw krga , then
//ExpressError ke pass pochenge , vo error handlig midlleware ki pass bejenga ,
//uss midlleware statusCode ,message wagera extract krke render kkr denge error.ejs pe , aur error.ejs ke sath message bhi render ho jaega




//08 Validation for Schema
//esse likhenge upper wale ko
const validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);      //error nikal liya niche if laga diya error hua to if true hoga aur erro throw krga
    if(error){
        throw new ExpressError(400,error)   
    }
    else{
        next();
    }
}

//ab ye jese create post mein esse validateListing ko likh do
app.get("/listing",validateListing,wrapAsync({

}))
//
const validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);     
    if(error){
        let errMsg =error.details.map((el)=>el.message).join(",")  //ye line kuuch nhi bass  error ko acche se comma wagera se join krke dikha degi ,, uper wala bhi likh skte hai
        throw new ExpressError(400,errMsg)   
    }
    else{
        next();
    }
}