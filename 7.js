//01 this Keyword
//Object ke andar kisi property ka use krna hai to
//"This" keyword refers to an object that is executing the current piece of code.
const student ={
    name :"Kuldeep",
    age:17,
    phy:36,
    maths:36,
    chem:36,
    getAvg(){
        console.log(this)
        let avg =((this.phy+this.chem+this.maths)/3)
        console.log(`${this.name} got avg marks=${avg}`);
    }
}
student.getAvg();

function getAvg(){   //Yaha pe function kisi object mein nhi hai  lekin window object ko to use kr rha to this krte hi window ke bare mein aa jata hai 
    console.log(this)
}
getAvg();


//02 Try_Catch
// The try statement allows you to define a block of code to be tested for errors while it is being executed.
//The catch statement allows you to define a block of code to be executed , if error occurs in the try block.
console.log("hello");
console.log("hello");                         //Agr yaha a defined hota to try catch kuch nhi krte bete rete
try{                                         //Yaha pe a defined nhi hai to agge ke code execute nhi hota aur error dikha deta too try catch laga diya try error find krega catch shi krega
    console.log(a)
}catch(err){
    console.log("Catch an error...a not defined")
    console.log(err)                       //Jo error aya hai usko bhi dekh skte hai catch ko name deke console kr do
}
console.log("hello2");
console.log("hello2")


//03 Arrow Functions
//   const func = (arg1,arg2)=>{function definition}
//   function ko likhne ka ek aur compact tarika function ka namm nhi hota vo variable let const hota hai
const sum = (a,b)=>{
    console.log(a+b)
};
const cube =(n)=>{                  //There is single arguement so we can write n instead of (n)..... bina () ke kaam chal jaega 
    return n*n*n;
}
const hello = ()=>{                  //if there is no arguement then () is compulsory.
    console.log("hello")
}


//04 Implicit Return in Arrow Functions
//agar arrow function sirf ko single value return kr rha hai to return ko bhi hata ke aur compact kr skte hai code ko.
//const func=(arg1,arg2,..)=>(value)  //Aur {} ki jagh () use krte hai ya na bhi kre to bhi chalega
const mul =(a,b)=>(a*b)
console.log(mul(3,4))
const cubee = n => n*n*n


//05 Set Timeout Functions
//setTimeout(function,timeout)    //ye timeout milliseconds mein hota
console.log("Hi There");
setTimeout( ()=>{
    console.log("Talaw")
},4000)
console.log("Welcome to")


//06 Set Inteval
//settimeout given time badd ek execute krega , but setinterval give time badd execute krega fir wapis utne der baddd excetuve krta hi jaega
//setInterval(function,timeout)
//    setInterval(()=>{
//       console.log("Talaw")
//    },2000);
//isko id deke isko stop kr skte hai esse sbhi set intervals ko id de do aur jisko chao usko stop kr lo
let id1 = setInterval(()=>{
    console.log("Talaw")
},2000);
console.log(id1);       //id print karane keliye
clearInterval(id1)    //Ye rokhne ke liye


//07 this with Arrow Functions
const studentt ={
    name:"kuldeep",
    marks:95,
    prop:this,
    getName: function(){            //ye function calling object ko this manta hai yaha iska calling object studentt hai
        console.log(this)
        return this.name
    },
    getMarks : ()=>{                //arrow function parent kr scope ko this manta hai ~ calling parent ke this ko this manta hai yaha dekhe to parent ka this window object hoga to vhi arrow function ka
        console.log(this)
        return this.marks
    },
    getInfo1 :function(){
        setTimeout(()=>{
            console.log(this)   //yaha studentt object ayi hai parent - function ka this ko ki studentt obejct hai
        },2000)
    },
    getInfo2 :function(){
        setTimeout(function(){    //yaha  window object ayegi kyuki calling ko  this manega timeout window object ka hai
            console.log(this)
        },2000)
    }
}
studentt.getName();
studentt.getMarks();
studentt.getInfo1();
studentt.getInfo2();


//08 Practice Qs
//Write a arrrow function that rerurns the square of an number 'n'
const square = n=>(n*n);
console.log(square(6));
//Write a function that prints "Hello World"5 times at inerval of 2s each
let id =setInterval(()=>{
    console.log("Hello World")
},2000)
setTimeout(()=>{
    clearInterval(id)
},10000)