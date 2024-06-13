//01 MVC : Model,View,Conroller
//Implement Design Pattern for Listings
//Controllers mein sab routes ke callback store krenge


//02 MVC for Listings


//03 MVC for Reviews_Users


//04 Router.route
//A way to group together routes with different verbs but same paths
//we can  see about it in expressejs.com mein api  reference ke andar reoute.router()


//05 Re-style Ratings
//Starablity css pe gye , github wali websiite kholi
//review.css naam ki file banayenge , boilerplate mein require krenge 
//aur review.css mein starability-css se basic , fade etc jo acchha lage  vo code copy paste kr denge

//fir show  mein jaha HTML code paste kr denge uski class apne hisab se alter kr denge ,, ye rating lene ke liye ho gaya

//niche showing the static rating result , yaha jo code hoga vo copy paste kr denge jaha rating dikhani hai
//apan ne input le rhe rhe the to name="review[rating]" ye nhi rkha tha to rating show nhi ho pa rhi thi ,, to nam eye hi rkhna taki <%= review.rating%> krne pe rating show ho skke



//06 Image upload
//file lenge third party se link mein convert krke mongo mein bej doo



//07 Manipulating Form
//agar form mein enctype="multipart/form-data" likh diya to form koi file upload karwane ke capable ho jata hai
//AAur fir image input type= "file" kr diya

//ab agar req.body print karwaoge to {} khali string ayegi kyuki req mein multipart/form-data hai to usse smjh nhi atta 
//Isilye multer install krna padega
//npm pe multer dekho code dekho
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })
//upload.single('avtar')  /ye single file ko upload karega // avatar ki jagh input ka naam likh denaa



//08 Cloud Setup
//File le li , ab hum cloud mein store krna hai
//Third-Party = Cloudinary
// .env = ye file banate hai credentials store krne ke liye //credential kaam atte hai jese cloudinary ko use krna hai
//.env mein KEY=value esse likhte hai

//dotenv npm package .env file ko backend se integrate karata hai
if(process.env.NODE_ENV !="production"){
  require('dotenv').config();
}
//dotenv ko jab hi use krna hai jab production level nhi ho isiliye ye code likha
console.log(process.env.SECRET)   //ye agar .env mein SECRET="mysecret" likha hua hai to esse console krne se mysecret print ho  jaega

//abhi sirf ye teen chiz store krenge .env mein
CLOUD_NAME
CLOUD_API_KEY
CLOUD_API_SECRET


//09 Store Files
//Two npm packages more download = cloudinary & multer-storage-cloudinary
//Make a file CloudConfig and write

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
 
cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.CLOUD_API_KEY,
  api_secret:process.env.CLOUD_API_SECRET
})
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "wanderlust_DEV",
    allowedFormats: ["png","jpg","jpeg"],
  },
});
module.exports={cloudinary,storage} 
//require in listing.js

const {storage} = require("../cloudConfig")
const upload = multer({storage})   //phele store krne ke liye destination koi upload folder tha
// ab s=destination storage hai (storage apan mein cloudinary ke andar banai)




//10 Save Link in Mongo
//Modify image in Schema
//schema mein image :{url:String , filename:String} ye likho
//listing.js mein new post route mein
//middleware ki tarah upload.single("listing[image]") likha
let url = req.file.path;
let filename = req.file.filename;

const newListing= new Listing(req.boagy.listing)
newListing.owner = req.user._id
newListing.image = {url,filename}
await newListing.save();
req.flash("success","New listing added")
res.redirect("/listings")



//11 Display Image