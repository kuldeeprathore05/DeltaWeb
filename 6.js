//01 Functions in JS
//    Function Defining
//    function funcName(){
//       //do something
//    } 
//    Function Calling
//    funcName();
function hello(){
    console.log("Hello")
}
hello();
function print1to5(){
    for(i=1;i<=5;i++){
        console.log(i)
    }
}
print1to5();
function isAdult(){
    let age =15
    if(age>=18){console.log("Adult")}
    else{console.log("Not adult")}
}
isAdult();


//02 Practice q1
function printPoem(){
    console.log("Twinkle twinkle little star")
    console.log("How I  wonder what you are")
}
printPoem();


//03 Practice q2
function rollDice(){
    console.log(Math.floor(Math.random()*6)+1)
}
rollDice();


//04 Functions with arguement
//Values we pass to the function
//      function funcName(arg1,arg2..){
//          //do something
//      }
function printName(name){
    console.log(name);
}
printName("Kuldeep");
printName("Rajat")
function printInfo(name,age){
    console.log(`${name}'s age is${age}.`)
}
printInfo("Kuldeep",17);
printInfo("kutta",5)
function sum(a,b){
    console.log(a+b)
}
sum(9,8);
sum(1,4);


//05 Practice q3
//Create a function that gives us teh average of 3 numbers.
function avg(a,b,c){
    console.log((a+b+c)/3)
}
avg(12,67,99);



//06 Practice q4
//Table of any number
function table(n){
    for(i=n;i<=n*10;i=i+n){
        console.log(i)
    }
}
table(7);




//07 return Keyword
//return keywor dis used to return some value from the function.
//      function funcName(are1,arg2){
//          //do something
//      return val;
//      }
//return ke badd ke statement execute nhi hote function mein
function sum(a,b){
    return a+b;
}
console.log(sum(1,4))
function adult(age){
    if(age>=18){
        return "adult";
    }
    else{return"not adult"}
}
console.log(adult(13))


//08 Practice q5
//Create a function that returns the sum of numbers from 1 to n
function allSum(n){
    return n*(n+1)/2;
}
console.log(allSum(8));
//OR
function getSum(n){
    let sum =0;
    for(i=0;i<=n;i++){
        sum=sum+i      //sum+=i
    }
    return sum;   
}
console.log(getSum(8))



//09 Practice q6
//Create a function that returns the concatenation of all the strings in an array.
let str   = ["hi","hello","bye"];
function concat(str){
    let result ="";
    for(i=0;i<str.length;i++){
        result +=str[i];
    }
    return result;            //yaha return hi kiya hai to bahar console krna padha kyuki function ke andar console nhi tha
}
console.log(concat(str));


//10 Scope
//Scope determines the accssiblity of variables, objects, and functions from different parts of the code
//Three types 
//Function Scope 
//Block Scope
//Lexical Scope
//Function Scope = Variables defined inside function are not accessible(visible)from outside the function
let summ = 54; //Global Scope
function calSum(a,b){
    let summ = a+b;  //Function Scope //function ke inside hi raaj hai iska 
    console.log(summ)
}
calSum(1,2)
console.log(summ)


//11 Block Scope
//Variables declared inside a {} block cannot be accessed from outside the block.


//12 Lexical Scope
//a variable defined outside a function can be accessible inside another function defined after the variable declaration
//The opposite is NOT true.
function outerFunc(){
    let x=5;
    let y=7;
    function ineerFunc(){
        console.log(x)
        console.log(y)
    }
}



//13 Practice q7
let greet = "hello";   //global scope

function changeGreet(){
    let greet = "namastee";  //function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet); //lexical scope
    }
    innerGreet();
}
console.log(greet);
changeGreet();


//14 Function Expressions
//   let variable = function(){
//       //do or return something
//   }
let suum = function(a,b){      //yaha function ka koi name nhi hai function is a variable , variable ke naam se hi function ko call krenge.
    return a+b;
}
console.log(suum(8,2));


//15 Higher Order Functions
//A functin that does one or both:
//      -takes one or multiple functions as arguements
//      -returns a function
function greeetFunc(func,count){
    for(i=1;i<=count;i++){
        func();
    }
}
let greeet = function(){
    console.log("hello");
}
greeetFunc(greeet,9);
greeetFunc(function(){console.log("namaste")},200);


//16 Higher Order Functions (return)
//returns a function
function oddEvenTest(request){
    if(request == "even"){
        return function(n){
            console.log(n%2==0)
        }
    }
    else if(request ="odd"){
        return function(n){
            console.log(!(n%2==0))
        }
    }
    else{
        console.log("wrong request.")
    }
}
console.log(oddEvenTest("odd"))
console.log(oddEvenTest("even")(8))


//17 Methods
//ACtions that can be performed on an object.
let calculator = {
    add : function (a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    }
}
console.log(calculator.add(5,5));
// Methods(Shorthand)     // Yaha function likhne ki need nhi direct likh diya
const calculatorr={
    add(a,b){
      return a+b  ;
    },
    sub(a,b){
        return a-b;
    }
    
}