//01  The Mongo Shell
//mongosh   //to start
//use college   //to create & use  new database called "college"
//help    //sare command aa jaegi
//quit/exit    //to exit from momgosh
//show dbs    //show databases
//db      //show database currently using
//CTRL+L    //to clear mongosh shell


//02 BSON Data
//Binary JSON 
//BSON vs JSON you can read on MongoDB website.
//Mongo ke andar data bson form mein store hota hai chae hume json form mein likha ho

//03 Document_Colection
//Documentation : Mongo stores data in form of documnents (BSON docs)    //Isko sql ki row/tuple ki tarah maan lo ..[row ko tuple aur coummn ko schema bolte hai]
//Collection : MongoDb stores documents in collections.    //Isko sql ki table ki tarah maan lo


//04 INSRT in DB (insertOne)
//show collections                                //mtlb table bataega
//db.student.insertOne({name:"adam",age:15,marks:77})
//db.student.insertOne({name:"eve",age:14,city:"delhi"})    //yaha student table(collection) ka naam aur ye insert one ke badd ek bache ka data likh rh=kha hai ,,iss tarah smjh lo
//db.student.find()                               //essa smjho kisi bhi collection(table) ka data show krega
//If collection does not exist, MongoDB creates the collection when you first store data for that collection.


//05 INSRT in DB (insertMany)
//insertMany(array of documents)
//db.student.insertMany([{name:"oogy",age,18,marks:99},{name:"jack",age:19,city:"Delhi"}])



//06 Find in DB
//db.student.find()   //returns everything
//for specific queries
//db.collection.find({key:value})      //ye return mein cursor deta hai (reference to original) is output [{}] ke andar atta hai actual mhi deta uski taraf point krta hai
//db.collection.findOne({key:value})   //actual document iska output{} iske andar atta hai
//EG
//db.student.find({city:"delhi"})      //vo hi student output mein ayenge jinki city delhi hai student collection mein doo hai to vo dono aa jaenge
//db.student.findOne({city:"delhi"})   //sirf ek hi output ayega jese doo delhi walo mein se ek hi output hoga
//db.student.find({city:"delhi",age:14}) //doo condition laga di hume vo bacha chiye jo delhi meiin ho aur age 14


//07 Query Operators
//MongoDB ki website pe resouces mein query and prjection operators mein dekh skte ho
//   $eq = equal to   
//   $gt = greater than
//   $gte = greater than equal to 
//   $lt = less than  
//   $lte = less than equal to
//   $ne = not equal to 
//   $in =  matches of any values specicified in an array 
//   $nin = matches none of  values specicified in an array 
// And many more in website
//EG
//db.student.find({marks : {$gt :75}})  //students where marks > 75
//db.student.find({city : {$in:["mumbai","delhi"]}})    //students who live in delhi or mumbai
////db.student.find({$or:[{marks:{$gt :75}},{city:"delhi"}]} )     //students who scored >75 or live in delhi




//08 UPDATE in DB
//updateOne
//Updates at most a single document that match a specified filter even thouhg multiple documents may match the specified filter.
//db.collection.updateOne(<filter>,<update>,<options>)
//db.student.updateOne({name:"adam"},{$set : {marks:51}} )    //adam naam ke student ke marks 51 set ho jaenge $set likhna padta haii

//db.collection.updateMany()    //Update all documents that match a specified filter
//db.collection.replaceOne()    //Replaces at most a single document that match a specified filter even though multiple documents may match the specified filter.
//Eg
//db.student.updateMany({city:"delhi"},{$set:{city:"new delhi"}})
//db.college.replaceOne({name:"eve"},{name:"dee",marks:88,state:"Rajasthan"})    //eve wala pura hi replace ho jaega bass id same rhegi uski jo phele thi vo hi rhegi



//09 Nesting
//manlo tumara data essa hai
//db.student.insertOne({name:"farah",  performance:{marks:88,grade:"A"}}} )
//If you need to find student jiske marks 88 hai to "performance.marks" likh ke find krenge performance.markksko string mante hai to "" ke andar likhenge
//db.student.find({"performance.marks":88})

//10 DELETE in DB
//deleteOne
//db.collection.deleteOne(<filter>,<options>)    //options likhne ki no need
//deleteMany
//db.collection.deleteaMany(<filter>,<options>)    //options likhne ki no need

//db.dropDatabase()    //college naam ka database delete ho jaega





//******************
//Apan ne CRUD operations kiye create read update delete   ,,,insert wagera se create ,find se read , update se update , delete se delete
//updates aur delete mein <options> likhna no need
