// 01 Obect Literals
//Used to store keyed collections & complex entities.
//property=>(key,value)pair
//Objects are a collection of properties
//Jese koi student ka name(key) = kudleep(value)  age(key)= 17(value)   marks(key)=98(value)  ye sab value key ke pair property of object hai ...
//Array ki jagh we use object literals to store complex data


//02 Creating Object Literals
let student =  {
    name:"Kuldeep",
    age:17,
    marks:95
}
let array = ["Kuldeep",17,95]
console.log(student) 
console.log(array)
  //array mein jo phele lihkte hai vo pele print hota Object mein order change ho jata hai
 //object mein array ke comaprison mein jyda clarity rheti hai ki kon kya hai mtlb value kis key ki hai
 const item={
    price:100.99,
    discount:50,
    colours:["red","blue"]
 };


 //03 Creating a Post
const post ={
    usernme : "@kuldeeprathore",
    content :"This is my first post.",
    likes : 150,
    reposts : 5,
    tags :["@hemant","@jee"],
}
console.log(post)


//04 Get Values
//Two methods hai console mein given below likh do
//  object["key"]
//  object.key
console.log(post["content"])
console.log(post.content)
console.log(post.likes)
console.log(post["tags"])
console.log(post.tags[1])
//agr koi variable ho to square bracket wala hi use mein ayega dot wala undefined bata dega
let prop = "reposts"
console.log(post[prop])
console.log(post.prop)
   

//05 Conversion in Get Values
//JS automatically converts objects keys to strings
//Even if we mage the number as a key , the number will be conerted to string. 
const obj ={
    1:"a",
    2:"b",
    true:"c",
    undefined:"d",
    null:"e"
}
console.log(obj[1])  //key(reserved keyword ko key ki trah use kiya to) ko string mein convert kr deta hai
console.log(obj["2"])
console.log(obj[null])
//console.log(obj.1)     isme error aa jaega kyuki dot number ko string mein nhi krta null true wagera ko kr leta hai square bracket sbko hi kr lete hai
console.log(obj.null)


//06Add/Update Value
let uncle ={
    name:"Kuldeep",
    age:23,
    marks:98,
    city:"Delhi"
}
uncle.city="Mumbai"            //Change value ko existing key , Change city delhi to mumbai 
uncle.gender="Male"            //Add a new property , gender Male
uncle.marks =[95,92,"Pass"]    //We can convert value to other type also 
delete uncle.age               //Delete a key 
console.log(uncle)

//07 Nested Objects
let classInfo={
    aman:{
        grade:"A+" ,
        city:"Delhi"
    },
    shardha:{
        grade:"A",
        city:"Pune",
    },
    rahul:{
        grade:"A++",
        city:"Ladakh",
    }
}
console.log(classInfo)
console.log(classInfo.shardha)
console.log(classInfo.shardha.city)
classInfo.shardha.city="Baran"
console.log(classInfo.shardha.city)

//08 Array Of Objects
let classInfoo = [
    {
       name:"aman",
       grade:"A",
       city:"Delhi" 
    },
    {
        name: "shardha",
        grade:"A",
        city:"Pune",
    },
    {
        name:"rahul",
        grade:"A++",
        city:"Ladakh",

    }
]
console.log(classInfoo)
console.log(classInfoo[1])      //array ke andar object to phele array ki tarh fir object ki trah locate kiya  ..
console.log(classInfoo[2].city)
classInfoo[0].city="Mumbai"
classInfoo[1].gender="Female"
console.log(classInfoo)


//09 Math Object 
console.log(Math)              // math ka M bada , iske andar sare math function hai
console.log(Math.PI)           //Pie ki value ke liye
console.log(Math.E)            // e ki value ke liye
console.log(Math.abs(-12))     // abs mtlb absolute functin act a mod function
console.log(Math.abs(2.5)) 
console.log(Math.pow(2,4))     //power function 2 ki power 4 ans 16
console.log(Math.floor(5))     //Round off nearest smallest int value 
console.log(Math.floor(5.5))   //5
console.log(Math.floor(5.99))  //5
console.log(Math.floor(-5.6))  //-6
console.log(Math.ceil(5))     //Round off nearest largest int value 
console.log(Math.ceil(5.1))   //6
console.log(Math.ceil(5.99))  //6
console.log(Math.ceil(-5.6))  //-5
console.log(Math.random())    //Everytime give different value between 0 and 1 , 1 kabhi nhi dega 1 is exclusive.


//10 Random Integers
//random wala function 0 se 1 decimal generate krta hai if you want to generate integer follow steps
let step1 = Math.random()
let step2 = step1*10 // 1 se 10 ki range mein chiye isilye multiply 10 agar 100se 1000 chiye to multiply 1000 ...
let step3 = Math.floor(step2)
let step4 = step3+1  //ye extra step  taki kabi 10 bhi generate ho varna 0.99 aya vo round off wagera hoke 9 hi rhe jaega 10 nhi aa paega ...
console.log(step4)
let random = Math.floor(Math.random()*10)+1;   //For any random no. b/w 1 to 10


//11 Ques Practice
//Math.floor(Math.random()*n)+1 Any number between 1 and n
console.log(Math.floor(Math.random()*100)+1)  //random number between  1 to 100
console.log(Math.floor(Math.random()*5)+1)//random number between  1 to 5
console.log(Math.floor(Math.random()*5)+21)//random number between  21 to 25

//12 Guessing Game
const max = prompt("Enter max number");
console.log(max);
const number = Math.floor(Math.random()*max)+1
console.log(number)
let guess = prompt("Guess the number")
while(true){   
    if(guess=="quit"){
    console.log("Quiting Game");
    break;
    }
    if(guess == number){
    console.log("Congrats you guess correct.");
    break;
    }
    if(guess< number){guess = prompt("Your guess is small. Try again")}
    if(guess> number){guess = prompt("Your guess is large. Try again")}
}

