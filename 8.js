//01 Array Methods
//forEach  //arr.forEach(some function definition or name);
let arr = [ 1,2,3,4,5]
let print = function(el){
    console.log(el);
};
arr.forEach(print);
//OR
arr.forEach(function(el){
    console.log(el);
});
//OR
arr.forEach((el)=>{
    console.log(el);
});

let array = [{name:"Kudleep",marks:97},{name:"John",marks:98},{name:"Tom",marks:96}]
array.forEach((student)=>{
    console.log(student);
})
array.forEach((student)=>{            //arrray.foreach(some function) // yaha chao to koi function alags se bana ke uska namm iss bracket mein rkh do
    console.log(student.marks);
})


//02 Map Function & Filter Function
//Map --> let newArr = arr.map(some function definition or name)
let num =[1,2,3,4,5]
let double = num.map((el)=>{
    return el*2
})
console.log(double)

let student = [{name:"Kudleep",marks:97},{name:"John",marks:98},{name:"Tom",marks:96}]
let gpa = student.map((el)=>{
    return el.marks/10
})
console.log(gpa)
//Filter --> let newArr = arr.filterap(some function definition or name)
let nums = [2,34,1,5,6,8,10];
let even = nums.filter((el)=>{
    return el%2==0;               //odd--> false even-->true
})
console.log(even)
let ans =nums.filter((el)=>{
    return el <5;
})
console.log(ans)


//03 Every_Sum
//Returns true if every element of array give strue for some function . Else returns false.
// arr.every(some function definition or name)     //returns true of false
let number =[2,4,6]
let numbers = [5,3,4,6]
console.log(number.every((el)=>(el%2 == 0)))
console.log(numbers.every((el)=>el%2 == 0))
console.log(numbers.some((el)=>el%2==0))    //EVery and ki tarah hai har chiz true hogi tab hi pura ture some is like or [5,3,4,6] mein only4,6 even to pura hi true



//04 Reduce Method
//Reduces the array to single value.
//  arr.reduce(reducer function with 2 variables for (accumulator,element))
let finalVal = number.reduce((accum,el)=>accum+el)
console.log(finalVal)


//05 Maximum in Array
//finding maximim in an array
let max = number.reduce((a,b)=>{
    if(a>b){return a}
    else{return b}
});
console.log(max)

//or by simple using loop we can find
let maxx = -1
for(i=0;i<number.length;i++){
    if(maxx<number[i]){maxx = number[i]}
};
console.log(maxx);



//06 Practice Qns
//Check if all numbers in our aray are multiples of 10 or not.
let  numb = [10,20,80,1]
console.log(numb.every((el)=>el%10==0))

//Create  a function to find the min number in an array.
function getMin(){
    let min = numb.reduce((a,b)=>{
    if(a<b){return a}
   else{return b}
})
console.log(min)
}
getMin([1,2,3,8]);


//07 Default Parameters
//Giving a default value to thr arguements
//   function func(a, b=2){
//         //do something
//   }
function summ(a ,b=4){return a+b}
console.log(summ(9))
//agar a=4,b likha aur summ(1) kiya to 1 a ko assign ho jati hai aur b undefined reta hai isilye default value badd value ko dete hai ..


//08 Spread
// Expands an iterable into mulyiple values
//    function func(...arr){
//         //do something
//     }
console.log(..."kuldeepRathore")
let arrayy = [1,3,5,7,8,942,45,6]
console.log(arrayy)
console.log(...arrayy)
console.log(Math.min(1,2,3,56,))
console.log(Math.min(arrayy))    //NaN ayega kyuki arrayy ek arrayy hai
console.log(Math.min(...arrayy))   // 1 ayega kyuiki  ...arrayy koi arrayy nhi khuli hui values hogi


//09 Spread (Array Literals) 
let char = [..."hello"]   //char ek string hogi jisme hello string ke character honge kyuki ... ne hello ko khole diya hoga aur [] hai to string bann gyi
console.log(char)
let dig = [1,2,3,4]
let newDig = [...dig, ..."hello" , 2,5,8]   //... dig ko khol dega aur teen element aur to 6 ki array bann jaegi
console.log(newDig)


//10 Spread (Object Literals) 
const data ={
    email : "kuldeeprathore",
    password:"abcd",
};
let newdata ={...data , id:123}   //... ne object ko khol diya property key pair fela diye ek aur pair add kiya {} mein tha nyi object ho gyi
console.log(data)
console.log(newdata)
//agar {} ke andar string ko spread kr diya to string ka indeex key ka kaam karega aur uss index pe uski value value ka kaam kargi
let obj ={...dig }
console.log(obj)
let  obj1 ={..."hello"}
console.log(obj1)



//11 Rest
//Allows a function to take an indefinite number of arguements and bundle them in n array.
function suum(...args){
    for(i=0;i<args.length;i++){
        console.log("you gave us ", args[i])
    }
}
console.log(suum(1,2,3,4))    //yaha pe ye values ko array bana diya ...args ne 

function suuum(...args){
    return args.reduce((a,b)=>a +b)
}
console.log(suuum(1,2,3,4,5))

function min(...args){
    return args.reduce((a,b)=>{
        if(a<b){return a}
        else{return b}
    })
}
console.log(min(1,2,34,56,67,-1))


//12 Destructuring
//Storing values of array into multiple variables
let names= ["rahul","rohan","ram","ramesh","steve","rohit"]
// let winner = names[0]
// let runnerup= names[1]   //ye krne se acccha destructuring kro
let [winner ,runnerup,secondrunnerup,...others]=names    //yaha pe ...rest ki tarh honge baki bache names ko array bana denge
console.log(winner)
console.log(secondrunnerup)
console.log(others)


//13 Destructuring(Objects)
const students={
    name:"kuldeep",
    age:"17",
    class:11,
    subject:["eng","hindi","maths"],
    username:"kuld",
    password:"abcd",
    city:"Delhi"
};
// let username = student.username;
// let password = student.password;   //yaha bi isse acha destructuring kro 
let {username:user , password, city:loaction="Mumbai"}=students    //yaha password variable ke liye serach krega aur key hai object mein vo to variable ko console krenge to key ki value de dega ,,, user ek naya variable diya hai usko username ki value assign kr di(username ki value ko nye vaiable user mein store kr diya )
console.log(user)
console.log(password)
console.log(loaction)     //city essa variable jo object mein nhi hai to loaction undefined bataega but default mumbai de diya to mumbai batega agar object mein kuch hota city nam ka to vhi batata vo