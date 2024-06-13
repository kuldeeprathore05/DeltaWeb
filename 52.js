//01  SQL Relationships (one to one)
//via Foriegn Keys
//-one to one         -one to many           -many to many

//03 One To Few (in Detail)
// One to Many | Approach 1 (one to few)
// One to many ke teen tarike hai ... ek to apna many once tens hundreds mein ho ... dursa many thousands mein ho ... tersa many crores mein ho
// One to few like table_1 ka ek datapoint table_2 ke hundreds (thode se) of datapoints se connected hai
// Store The Child document inside parent
//Eg::
// {
//     _id:ObjectId("74628rbr987893gg2o7ti0629r"),
//     username: 'sherlockholmes',
//     adresses: [
//         {location: '221B Baker Street',city: 'London'},
//         {location: 'P36 DowmTown',city: 'London'},
//     ],
//     __v: 1
// },
//yaha jese address mein array store kri hai


//04 One to Few (Implementation)
//Iska example like that in flipkart ek hi user khud ke 4-5 address save krke rkhta hai
//Check in Relationships folder in Backend
//Jab schema define kr rhe the tab location mein _id:false likh , nhi to locations ki array mein objects ko bhi separate objectId milti hai


//05 One to Many | Approch 2
//store a reference to the child documnet inside parent


//06 One to Few (Implementation)
// Example - Ek shopkeeper ki bhot sare customers ke order

//07 Using Populate
//Populated paths are no longer set to their original _id , their value is replaced with the mongoose document returned from the database by performing a separate query before returning the results.
//kahi listing bej rahe hai show krne ke liye uske piche .populate("<listing mein jo array hai uska nam>") likhne se jo listing ki objects hai vo khulke dikhti hai

// const story = await Story.
//   findOne({ title: 'Casino Royale' }).
//   populate('author').
//   exec();
// // prints "The author is Ian Fleming"
// console.log('The author is %s', story.author.name);



//08 One to Squillions (Approach 3)
//Store a refernce to the parent document inside child
// eg : user ke andar ye save kre ki iske konse konse post hai ,, usse acha ye set kr denge ki iss post ka kon user hai  ,, kyuki post ka ek user hoga , but ek users ki lakho posts hogi


//09 Reading Docs
// 6 Rules of Thumb For MongoDb Schema Design 
// On mongodb website