//01 Basic SetUp


//02 Creating the Model


//03 Initialise Database(database banaya init.js mein aur require kiya)


//04 Index Route(index.ejs banaya)


//05 New Route(get request kri  new.ejs banaya)


//06 Create Route(isme  post banaya hai)


//07 Using Date
// <%=chat.created_at%> krne pr Tue Jan 30 2024 00:47:12 GMT+0530 (India Standard Time) esse date time aa raha hai 
// To apan isme se date time extract krnege 
// sabse phele isko string mein convert kro 
// fir split(" ") isse apan ne jaha jaha " "(space) hoga waha se split ho jaegi
// <%=chat.created_at.toString().split(" ") %>     //Tue,Jan,30,2024,00:47:12,GMT+0530,(India,Standard,Time)   essa likha ayega comma ke sath
// <%=chat.created_at.toString().split(" ")[4] %>    iska 4th index select kr liya to time aa jaega  //00:47:12
// <%=chat.created_at.toString().split(" ").slice(0,4).join(" ") %>   // slice krne pr Tue,Jan,30,2024 ye aa gaya //join(" ") se bich mein " "(space)  laga ke jodh diiya Tue Jan 30 2024 ye aya final date



//08 Edit Route
// GET /chats/:id/edit   
//edit button banayenge aur /edit pr req jaegi


//09 Update Route
// PUT /chats/:id
// npm i method-override and require and use method overide
//<form method="POST" action="/chats/<%= chat._id%>?_method=Put" > isse tarah liikho


//10 Destory Route
// DELETE   /chats/:id  -> delete by id  