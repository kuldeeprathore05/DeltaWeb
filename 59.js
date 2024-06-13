//01 Edit Listing Image
//Edit mein form mein enctype likh denge
//input type ="file" kr denge
//upload.single("listing[image]") //isko pass krenge middleware ki trah

router.put("/:id",upload.single("listing[image]"),valiadteListing,wrapAsync(async(req,res)=>{
    let {id}=req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing})   //deconstruct javacript ki object ko individuual values mein decontruct kiya
    if(typeof req.file !=="undefined"){
      let url = req.file.path;           //agar res.send(req.file) ye karoge to ek object show hoti hai usme hota hai .path mein link .filename mein filename
      let filename = req.file.filename;
      listing.image = {url,filename}
      await listing.save();  
    }
    
    req.flash("success"," Listing Updated")
    res.redirect(`/listings/${id}`)

}))
//phele listing ko update kiya , fir image ke liye kiya
//agar image upadate kri hi nhi to , isiliye check kiya req mein koi file ayi hai ya nhi





//02 Image preview edit page
//hum chahte hai ki edit page pe original image preview ho
//but vo kaam quality bhi chalegi kyuki preview hi karana hai
// https://cloudinary.com/documentation/image_transformation#transformation_url_structure
//iss documentation mein dekh skte ho kese quality kaam krni hai

//edit wale route mein ye likho
router.get("/:id/edit",(async (req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id)   
if(!listing){
    req.flash("error","Listing you requsted not exist")
    res.redirect('/listings')
}

let originalImageUrl = listing.image.url;
originalImageUrl = originalImageUrl.replace("/upload","/upload/h_300,w_300") ;   
res.render("edit.ejs",{listing , originalImageUrl})
}))
//ab edit wale page pr <%= originalImageUrl %> kih denge





//03 Gettinng Started with Maps
//We will use mapbox (google api isilye use nhi kr rhe kyuki vo credit card info mangti hai)
//Signup on it , Then go to account , then copy public token
//ye itna confidential nhi hai , lekin isko bhi .env mein store kara lete hai
MAP_TOKEN = pk.eyJ1IjoiZGVsdGEtc3R1ZHVlbnQiLCJhIjoiY2xvMDk0MTVhMTJ3ZDJrcGR5ZDFkaHl4ciJ9.Gj2VU1wvxc7rFVt5E4KLOQ


//04 Our First Map
//Mapbox Documnetation ->  Mapbox GL JS Docs -> Examples -> Display a map on a webpage
//Copy script and link in boilerplate
//Show mein <div id="map"></div>

//Now

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
//ye script ko alag se map.js file bana ke likh diya
//yaha mapboxgl.accessToken ="<%= process.env.MAP_TOKEN%>" esse access nhi kr skte kyuki .env file ko sirf ejs hi access kr skta hai

//Isilye show.ejs mein uper <script> const mapToken ="<%= process.env.MAP_TOKEN%>"</script> ye likh diya taki map.js mapToken ko access krke .env ko access kr ske
//aur show.ejs mein niche     <script src="../public/css/js/map.js"></script>     ye likh diya




//05 Geocoding
// Geocoding is the process of converting addresses(like street address) into geographic coordinates (like lattitude and lonngitude),which you can  use to  place markers on a map, or position the map.
//you can read https://docs.mapbox.com/api/search/geocoding/
// Forward geocoding converts location text into geographic coordinates, turning 2 Lincoln Memorial Circle NW into -77.050,38.889.
// Reverse geocoding turns geographic coordinates into place names, turning -77.050, 38.889 into 2 Lincoln Memorial Circle NW.

// https://github.com/mapbox/mapbox-sdk-js iss github repo pe sab  mil jaega
//scroll dowm Services Please read the full documentation for services. yaha pe click kro -> sroll and select forward geocoding -> sroll and see basic code
geocodingClient.forwardGeocode({
    query: 'Paris, France',
    limit: 2        //given loation ke kitne coordinate dene hai , by default 5 set ho rkha hota hai
  })
    .send()
    .then(response => {
      const match = response.body;
    });
//First -- npm install @mapbox/mapbox-sdk // install
//listing.js mein ye likho
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN
const geocodingClient = mbxGeocoding({ accessToken: MY_ACCESS_TOKEN });
//Now in craete listing
let response = await geocodingClient.forwardGeocode({
    query: 'Paris, France',
    limit: 1        
  })
    .send();
console.log(response)       //ye apka mapbox ka response hoga 
//isme bhot kuch hai , body apne kaam ka hai , aur body mein bhi features
console.log(response.body.features) 
//ye apne ko array dega jisme ek oject hogi,usme geometry hogi 
console.log(response.body.features[0].geometry)
//Final -----------
let response = await geocodingClient.forwardGeocode({
    query: req.body.listing.location,
    limit: 1        
  })
    .send();
console.log(response.body.features[0].geometry)


//06 Storing Coordinates
//we will use geoJSON you can read about it on mongoose.ejs/docs/geojson.html
    geometry: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
    }
    //copy this in your Schema
//then jaha listing create kr rhe hai waha // 
newListing.geometry=response.body.features[0].geometry
let saveLIsting = newListing.save();



//07 Map Marker
//map marker mapbox docs vhi GL JS mein examples mein ADD a default marker to a web map sme

//jese MAP_TOEKN beja vese hi coordinates bejne padenge map.js ko
const coordinates = <%-JSON.stringify(listing.geometry.coordinates)%>  //ye likha show.ejs mein upper
//map.js mmein
const marker = new mapboxgl.marker()
.setLngLat(coordinates)   //Listing.geometry.coordiates
.addTo(map);
//map.ejs mein bhi uper , center mein coordinates likh denge




//08 Map Popup
