//01 What is Node.js 
// Javascript Runtime Environment
// It is used for serve side programming.
// *Node.js is not a language , not a library , not a framework (ye runtime environment hai jo Js ko browser ke bahar run karta  hai)


//04 Node REPL(Read Evaluate Print Loop)
// Terminal mein jake node likh do fir javascript code kr skte ho aur exit krne ke liye .exit ya doo baar press ctrl C


//05 Node Files
//jese vs code mein koi folde mein koi file banai js ki to usko terminal mein same directory(folder) tak jaenge cd krte krte aur fir run kr skte hi terminal mein ,,,
// node fileName.js


//06 Pocess In Node
//process - this object provides about , and contol over , the curent Node.js process.,,,(repl ke andar process likh do sab aa jaega ,,, jese process.cwd() likh to current working dretory aa jaegi)
//process.argv -return an array containing-line arguements passed when the Node.js process was launched.,,,(vs code mein process.argv likh ke fir terminl pe node  fileName arg1 arg2 ..    ese arguements deke use kr skte hai)


//07Exports in files
//require()- a built in function ti iclude external modules that exist in separate files.
//module.exports - a special object


//08 Export In Directory
// Agar koi directory(folder) mein se infomation export krni hai eg ek fruit naam ka folder banaya usne teen file apple banana orange inki info ko export krke ussi directory mein ek file banao index.js(issi naam se honi chiye kyuki yhi entry point hota hai) usme sabko require kr lo aue jese bahar file.js mein require("./fruits kr do")
// index.js mein sbka require krne ke badd ek array bana lo sbki aur uss index.js mein module.exports uss array ko kr do
//Directory meinse kuch export krna hota hai to index.js ko entry point maan ke sirf usme se info leti hai
// ye krne ke badd bahar ki file mein uss directory ke naam se hi import kara lo jese file.js mein likha require("./Fruits")

//09 What is npm(Node Package Manager)
//npm is the standard package manager for Node.js


//10 Installing Packages
//package install krne ke liye given below ko terminal mein likha
//   npm install  <-package name->    //or, we can also write // npm i <-package name->
// we can search different npm packages at npmjs.com website

//Figlet ko ls karenge to teen chize dikhenge 1)node_modules/  2)package-lock.json 3) package.json
//1) node_modules - The node_module folder conatins every installed dependency for your project.
//2) package-lock.json - It records the exact version of every intsalled dependency , including its sub-dependencies and their versions.
//3) paclage.json - The package.json file conatins descriptive and functional metadata about a project , such as a name ,version , and dependencies

//Figlet mein ek file banao index.js fir usme likho const figlet = require("figlet")     ,,, yaha ./ likhne ki need nhi
//npm require krte hai to ./ nhi likhna reta
//Fir npm ki website se figlet ka code copy




//11 package.json (ye vo tesri file hai jo figlet ko install krne pe atti hai)
// package.json - The package.json file conatins descriptive and functional metadata about a project , such as a name ,version , and dependencies
// apne ye kisi ko bejna hai ya git pe push krna hai to node_modules ko bejne ki jaurat nhi ,,, package.json se usko la skte hai
// agar jese maan lo node_modules delete ho gaya to bass likh do npm install apne aap nodes_modules aa jaega

//agar koi khud ka project (folder) banaya usme package.json chaiye to write npm init aur enter krte jao author naam version batate jao
// npm init



//12 Local v_s Global Installation
// npm install -g <-package name->     //to install paackage globally
// npm link <-package name->            // usko link karna padta hai phele globally install krne ke liye




//13 import modules
// ya to pure code mein import use kro ya firr require
// to use import
//  for eg. In math.js file
//     export const sum = (a,b) =>(a+b)
//     export const mul = (a,b) =>(a*b)
//     export const g = 9.8
//     export const pie = 3.

// In file.js file
//  import {sum , pie} from "./math";     //yaha sirf doo hi import kiye ,,, require mein pura import krna padta hai
//  console.log(sum(1,5));

//npm init se package.json bana lena in directory to use import ki suvidha...
// ye use krne ke liye create package.json in directory aur add a key value pair "type":"module"
//"type":"module"  in package.json ye khud vs code se likh dena 