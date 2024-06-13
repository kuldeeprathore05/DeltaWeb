//01 REST 
// Representational State Transfer 
// REST is an architectural style that defines a set of constraints(rules) to be used for creating web services
// CRUD(Create Read Update Delete) ye sb task ke liye we use RESTfull APIs.
// Documentation 
// https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/



//02 CRUD Opertions
// GET retrives resources
// POST submits new data to the server
// PUT updates existing data
// PATCH update existing data partially
// DELETE removes data


//03 Creating RESTful APIs
// GET         /posts         to get data for all posts [INDEX route]
// POST        /posts         to add a new post [cREATE route]
// GET         /posts:id      to get one post(using id) [VIEW route]
// PATCH       /posts:id      to update specific post [UPDATE route]
// DELETE      /posts:id      to delete specific post [DESTROY route]


//04 Index Route 
//    /posts pe render kara denge posts ,,, posts ka array banaya index.js mein ,, fir usse use kiya apne index.ejs mein 
//  thodaa sa css bhi add kiya 



//05 Create _New Route
//Create post 
// POST   /posts    add a new post

//2route
//- Serve the form   GET   /posts/new
//- Add the new post    POST      /posts
//get ka use krke form wale page ko render kiya aur fir post ka use krke submit kiya ,,, then push kr diya ...


//06 Redirect
// res.redirect(URL)
// res.render jo apne ko post krne ki badd kisi aur page pe bej deta hai uski jagh we use res.redirect jo post krne ke badd posts wale page pe hi bej dega


//07 Show Route
// GET   /posts/:id      
// Sbhi posts ko id de phele fir ek show.ejs banya aur 
// app.get mein show.ejs ko render kiya
// req.params se id li aur id vo ho jo posts mein hai to find function lgaya
// index.ejs mein sbke niche show details anchor tag bana kr url likh diya


//08 Creating Ids(UUID)
//UUID Package [Universal unique identifier]
// Sbse phele npm install uuid
// Then require uuid you can check on npm website of uuid const {v4: uuidv4} = require('uuid')
// Then posts ki ids ki jagh id:uuidv4(),  likh diya
// jaha se new post ko post kr rhe the waha let id = uuidv4();  likh diya aur id ko bhi push mein likh diya,,so that new post ko bhi id mile



//09 Update Route
// PATCH    /posts/:id    to update specific post
//ek to hai methiid hai update krne ka ki hoppscotch me jake change kro aur 
// app.patch("/posts/:id",(req,res)=>{
//     let {id} = req.params;
//     let newContent = req.body.content;
//     let post = posts.find((p)=> id === p.id);
//     post.content = newContent;
//     res.send("patch req working")
// })
// ye sab likh ke hoppscotch se update kre 
// but har baar to essa nhi krenge isilye


//10 Edit Route
// Serve the edit form   GET   /posts/:id
// HTML mein GET POST doo hi method hote hai PATCH DELETE ko use krne ke liye you have to insall method-override pakage  
//npm i method-override
// const methodOverride = require("method-override")
// app.use(methodOverride("_method")) 
//require kiya ,,, fir kya change krna hai form mein method="post" action="/posts/<%=post.id%>?_method=PATCH "  method post hi but action mein ye likh diya..
// ye sab jankari you can get at npm website method-override
// last mein ye app.patch tha usme redirect use kiya
// app.patch("/posts/:id",(req,res)=>{
//     let {id} = req.params;
//     let newContent = req.body.content;
//     let post = posts.find((p)=> id === p.id);
//     post.content = newContent;
//     res.redirect("/posts")
// })

//11 Destory Route
// DELETE     /posts/:id     to delete specific post
// Apn ne index.ejs mein hi haar post ki niche delete button banaya ,,, but delete button ko form tg ke andar banaya 
// form mein method="post" action="/posts/<%=post.id%>?_method=DELETE " ye likh diya ,,
// app.delete banaya index.js js mein aur posts = posts.filter((p)=> id !== p.id);    ,, ye likha matlab posts ko filter kr do posts mein iss id ke alawa aur ids ho ...
// last mein redirect("/posts ") kr diya