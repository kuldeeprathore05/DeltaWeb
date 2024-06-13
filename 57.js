//01 Connecting Login Route
//How to check if User is Logged in?
//req.isAuthenticated()              //Passport method
if(!req.isAuthenticated()){
    req.flash("error","You are not logged in!")
    return res.redirect("/login")
}
//haar jahg likhne se accha iska middleware banake use krenge
//Like
module.exports.isLoggedIn =(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash("error","You are not logged in!")
        return res.redirect("/login")
    }
    next();
}
//aur haar route(jese add , update ,edit) mein isLoggedIn in likh denge


//02 LogOut User
//req.logout(<callback>)  //passport mein hi ek method hota hai ye
app.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","You are logged out!")
        res.redirect("/listings")
        
    })
})


//03 Adding Styles
//Apni info req mein store hoti hai 
// req.user= undefined (not logged in)     req.user=obj(logged in)
// res.locals mein dekh lenge inko
res.locals.currUSer = res.user //jese hume us middleware mein flash likh rrkha hai //yaha req.user ko currUser store krega



//04 Login After SignUp
//SignUp kre to apne app login ho jae
//Passport's login method automaticaly establishs a login session.
//We can invoke login to automaticaly login a user.
//req.login(<registered user ki info>,<callback>)       //you can read both req.login req.logout in passportjs.org
//Given below ko signup wale route mwin likh do apne app login ho jaega

req.login(registeredUser,(err)=>{
    if(err){
        next(err);
    }
    req.flash('success',"Welcome to wanderlust!")
    res.redirect("/listings")
})




//05 post-Login Page
//jese user listiing add krne gaya waha usse login krne ko bola , jab vo login kr de to sidha ussi page pr redirect ho
//apne req mein bhot sari information hoti hai
//usme se ek hai req.OrginalUrl aur isko hum req.session mein store kr lete hai , kese
//req.session.redirectUrl = req.OrginalUrl esse
//ab user.js mein login route mein res.redirect("/req.session.redirectUrl ")
//ab jese hi login page ayega vo login krega , to passport session reset kr deta hai
//isiliye ek aur middleware bana lete hai jo path ko locals mein store krega
module.exports.saveRedirectUrl =(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl= res.session.redirectUrl

    }
    next();
}
//ab isko user.js mein require kr lenge
//aur saveRedirecctUrl middleware ko route mein likh denge passport authenticate hone se phele taki path locals mein aaa jae, aur res.redirect(res.locals.redirectUrl)
// ab agar koi direct login ke button pe click krke login krna chahta hai , to vo isLogged in wale middleware se nhi gujrega to usko kis path pe redirect krenge
// Therefore route mein
let redirectUrl = res.locals.redirectUrl || "/listings"
res.redirect(redirectUrl)



//**** Ab listing owner and review owner krne hai ****//


//06 Listing Owner
//listing ke model mein owner naam se property bana denge , owner refers to user
//niche wali line init index.js mein likh dete hai taki sabkko koi owner mil jae esse hi
//initData.data=initData.data.map((obj)=>{
//     ...obj, owner:"------id---"
// })

//ab hum chah rhe hai  ki owner ki info bhi aye show route mein
//to usko ki populate krnege .populate("owner")
//show mein discriptionn se phele <%=listing.owner.username%> likh dnege

//create route mein newListing.owner = req.user._id            //agar koi create krega to usme uske user ki info bhi save ho jaegi

//** Abhi sirf owner hai ya hoga ye save karya hai */



//07 Starting with Authorization
//Ab kon kis listinng koi delete edit krega
//Jagha edit delete ke button show ho rhe hai waha  condition laga skte  hai if currUser && currUser._id.equals(listing.owner._id) to hi buttons show honge / currUser exist kre aur owner ke equal ho

//ye to button ko protect kiya ,, hume route bhi protect krne hai , koi direct route ko request bejke access kr skta hai





//08 Autherization For _listings
//Update route mein listing find and update kr rakhi hai usko hata ke pele find krenge , check krenge if(!currUser._id.equals(listing.owner._id)) to req.flash("error","no permission to edit") return res.redirect("/listing/${id}") ,, nhi to update hone doo
//agra return nhi kiya to upadte bhi ho jaegaa 
//Isiliye phele find krenge , user check krenge , owner nhi hua to return , owner hua to update

//ab ye same delete wale mein bhi likhne se acha middleware ana doo
module.exports.isOwner =async (req,res,next)=>{
    let {id}  = req.params;
    let listing = await Lsiting.findById(id)
    if(!currUser._id.equals(listing.owner._id)){
        req.flash('error ',"You are not owner")
        return("/listing/${id}")
    }
    next();         //middleware mein next ko call krna mtt bolna
}
//isOwner middleware pass kr denge update delete route mein
//phele isLoggedIn (login hai ya nhi ye check kro) , fir isOwner(kya ye hi owner hai) , then validateListing
//middleware.js mein sare middleware store krnege 
//yaha jese Listing se kaam hai to usko require krenge
//Jis jis se kaam hoga usse require ke lenge



//09 Authorization for _reviews
//haar reviews ka koi auuthor hona chiye
//review.js mein reviewSchema mein author:{type:Schema.Types.objectId,ref:"User"} ye kr denge
//user logged in ho tab hi review write krne ka option dikhe // too show route mein unko <%if(currUser)%> -----leave review form---- <%}%>   esee likh denge

//frontend protect kiya , lekin koi rquest bej ke eview add kr skta hai
//isLoggedIn miidleware ko use krenge reviews ke routes mein

//post rveiew route mei newReview.authore = req.user._id kr denge



//09 Authorization for _reviews||
//aur show  mein review ke author ka naam ho show krenge
//iske liye populate karana padega author ko bhi
const listing= await Listing.findById(id).populate({path:"reviews", populate :{path:author}}).populate(owner)
//ye nested populate tha // harr listing ka review aa jae aur har review ka author aa jae

//ab reviews ke route ko isLoggedIn aur isReviewAuthor se protect krenge

module.exports.isReviewAuthor = async (req,res,next)=>{
    let {reviewId,id} = req.params
    let review = await review.findById(reviewId)
    if(!review.author.equals(currUSer._id)){
        req.flash('error ',"You are not author of review")
        return("/listing/${id}")
    }
    next();
}