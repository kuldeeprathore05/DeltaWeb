// 01 Get and Post Request
//Get - Used to GET some response
//    - Data sent in query strings(limited , string data & visible in URL)
//    - Jese form banaya usme method get use kiya to jab register kereenge to url mein username password dikhega ... isilye post use krte  hai inn sab chizo mein usme usename pssword url mein nhi requst ki body mein reta hai
//Post - Used to POST something (for Create / Write /Update)
//     - Data sent via request body (any type of data)


// 02 Handling POST requests
// get ka data to url mein hota hai to use kr skte hai usko but post wale ko usse krne ke liye
// Set up POST request route to get response
// Parse POST request data
// app.use(express.urlencoded({extended : true}));   //ye url ki body se encode krega 
// app.use(express.json());
// aur apne index.js ke post.get mein let{user,passwod}= req.body likenge


// Apne ne form mein input mein name="user"  name="password"  likha hai isilye app.get ya app.post mein let {user,password} = re.query /req.body kar rhe hai

//03 OOPS
// Object Oriented Programming


// 04 Objects Prototypes 
// Prototypes are the mechanism by which JS objects inherit features from one another.
// It is like a single template object that all objects inherit methods and properties from without having their owm copy .

// arr.__proro__(reference)
// Array.prototype (actual object)
// String.prototype
// agar apan ne arr.__proto__.push = (n)=>{console.log("hello")}   ye kar kiya to array pe push krne pe number push nhi hoga bass ye print hoga console mein


// 05 Factory Functions
// A function that creates a object
// function PersonMaker(name,age){
//     const person = {
//         name: name,
//         age : age ,
//         talk() {
//             console.log(`Hi , my name is ${this.name}`);
//         },
//     };
//     return person ;
// }
// let p1 = PersonMaker("adam",25);
// let p2 = PersonMaker("eve",24);
// Problrm in this factory function is that p1.talk===p2.talk is false yaha p1 p2 dano ko alag alag copy milti hai function ki


//06 New opertor
// The new operator lets developers create an instance of user-defined object type or of onr of the built-in object type that  has a constructor function.
// Constructors - doesn't return anythng & start with capital letter
// function Person(name,age){
//     this.name = name ,
//     this.age = age  ,
//     console.log(this)
// }
// Person.prototype.talk= function(){
// console.log(`hi my name is ${this.name}`)
// }
// let p1 = new Person("adam",25);
// let p2 = new Person("eve",24);


//07 Classes 
// Classes  are a template for creating objects .
// The constructor method is a special method of a class for creating and intializing an object instance of that class.
// class Person{
//     constructor(name,age){
//         this.name =name,
//         this.age = age
//     }
//     talk(){
//         console.log(`hi my name is ${this.name}`)
//     }
// }
// let p1 = new Person("adam",25);
// let p2 = new Person("eve",24);


//08 Inheritance
//Inheritance is a mechanism that allows us o create new classes on th basis of already existing classes
class Person {
    constructor(name ,age){
        console.log("Person class constructor");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hi my name is ${this.name}`)
    }
}
class Student extends Person {
    constructor(name , age , marks){
        console.log("stuent class constructor")
        super(name,age);   //parent class constructor is being called
        this.marks = marks;
    }
}
class Teacher extends Person {
    constructor(name , age , subject){
        console.log("teacher class constructor")
        super(name,age); //parent class constructor is being called
        this.subject = subject;
    }
}

//agar koi same chize name age dono student teacher ke liye use hui too hum usko ek alag jagh store krke extends super kr lenge
//yaha person parent ki tarah hai student aur teacher child class hai ....








