//01 Handling Deletion
//jese customer add hua , sath mein uska order add hua too jab customer delete kre to uska order bhi delete ho jae
//Like that ki user account delete hua to uski post bhi delete
//Mongoose ki website pe you can check middleware mein query middlewares

//02 Mongoose Middlewaare
//Using Mongoose Middlewares We can use 2 middlewares :
//-Pre = run before the query is executed 
//-Post = run after the query is executed 

schema.pre('save', function(next) {   //save el query middleware // but findByIdAndDelete naam ka koi query middleware nhi hota ,  isilye findOneAndDelete likh dete hai , bcoz findByIdAndDelete triggers findOneAndDelete 
  // do stuff
  next();
});

//Exampple


customerSchema.post("findOneAndDelete",async(customer)=>{
    if(customer.orders.length){
        let res = await Order.deleteMany({_id:{$in:customer.orders}});
        console.log(res);
    }
})

const delCust = async()=>{
    let data = await Customer.findByIdAndDelete("65e4a37b0e8c460f287b81a");
    console.log(data)
}
delCust();

//# jese reviews show krne thee to vaha pe listing mein populate("reviews") likha taki jo reviews naam ki object hai listing ki andar vo khul ske
app.get("/listings/:id",wrapAsync(async(req,res)=>{
  let {id} = req.params;
  const listing = await Listing.findById(id).populate("reviews");   //.populate likha kyuuki listing ke andar reviews ki object hai usko render karana hai show route pe
  res.render("show.ejs",{listing})
}))


//# delete ki 2 baate hai ,1. jab reviews delete kr to review ki model se delete ho sath hi listing mein reviews array hai vaha se bhi delete ho  // iske liye $pull
//                         2. jab listing delete kre to uske reviews bhi database se delete ho //iske liye post middleware listing.js mein



//# delete krte time listing/:id/reviews/:reviewId pe route kiya taki listing aur review dono ki id mil skke
//#  await Listing.findByIdAndUpdate(id, {$pull:{reviews:reviewId}})  iss line ka matalb jab review delete kre tab use ke liye likhi hai , jab review delete hoga Listing update hogi , konsi listing uski id bata di , aur kya update hogi , ki jo reviews hai jinki id reviewID(jo delete ho rhe hai) ke baarabar hai vo pull(remove) ho jaenge 


//09 Deleting Reviews
// $pull : The $pull operator removes from an existing array all instances of a value or values that matches a specifie condition.
// jese listing ke andar array hai reviews ki jisme bhot se reviews honge
// pull array mein vo review dundega  jo delete krna hai aur delete kr dega
// pull dund ke delete krt hai


//10 Handling _Delete Listing
//Agar listing delete kre to uske reviews bbhi delete ho jae

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
      await Review.deleteMany({_id:{$in:listing.reviews}})
    }
   })

 //  ye likh diya listing mein jese koi listing delete krega to listing middleware call ho jaega
 //uss listing mein ko reviews honge unki id leke delete kr dega