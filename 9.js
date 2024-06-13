//01 Introduction
//DOM (Document Object Model)
//The DOM represents a document with a logical tree.
//It allows us to manipulate/change webpage content (HTML elements)


//02 What is DOM_
//console.dir(document) se document ko console krke changes kr skte hai

//03 Download Starter Code
 //console.dir(document.all) kiya to document ki sari objects aa jaegi
 //agar jese 8th object ko access krna haii to console.dir(document.dir[8]) likh do
//jese 8th position pe h1 tha to uski koi property pe jane ke liye console.dir(document.dir[8].innerText) 


//05 Selecting elements by Id
//documment.getElementById(id) likh do ,,, Id ko "" ke andar likhna verna vo variale ki tarah treat krta hai usko
//Returns the element as an object or null(if not found)


//06 Selecting elements by Class Name
//documment.getElementByClassNamw(class) likh do ,,, class ko "" ke andar likhna verna vo variale ki tarah treat krta hai usko
//Returns the element as an HTML Collection or empty collection (if not found)
console.log(document.getElementsByClassName("player"))
console.log(document.getElementsByClassName("player")[1])
let play = document.getElementsByClassName("player")
for(i=0;i<play.length;i++){
    play[i].src="shaami";
    console.log(`${i}`)
}



//07 Selecting Elements
//documment.getElementByTagName(class) likh do ,,, tag ko "" ke andar likhna verna vo variale ki tarah treat krta hai usko
//Returns the elements as aaan HTML collection or empty collection (if not found)
console.log(document.getElementsByTagName("p"))
//  document.getElementsByTagName("p")[1].innerText = "abc"     ye consoe mein likhne se kolhi ka abc ho jaega 


//08 Query Selectors 
//Allows us to see any CSS selector
console.dir(document.querySelector("p"))              //Selcts first p element
console.dir(document.querySelector("#myId"))          //Selects first element with id = myId
console.dir(document.querySelector(".myClass"))       //Selects first element with class = myClass
console.dir(document.querySelectorAll("p"))           //Selects all p elements


//09 Setting Content in Objects
// innerText - Shows the visible text conatined in node
// textContent - Shows all the full text (Hidden also)
//  innerHTML - shows the full markup
//       let header = document.querySelector("h1");
//       header.innerText = "HIIIII";
//ye sab likh skte hai


//10 Manipulating Attributes (getters and setters)
//obj.getAttribute('attr')
//obj.setAttribute('attr','val')
// yaha attr mein id ,class, src ... inko dekh skte hai aur set bhi kr skte hai attr mein id class ,, ye likha aur kya id class hai vo mil jaegi ,,, agar change krni ho to val mein kuch  likh do 
//obj.getAttribute('id')               //ye apne ko obj ki id dega
//obj.setAttribute('id','newId')       //ye uss obj ki id ko newId naam se set kr dega

//11 Manipulating Styles
// obj.style       //object matlab query selector se koi object banaya
// style se sirf vhi dikhega jo css inline css mein kiya hoga
//eg
//Obj.style.background = "blue"
//Obj.style.color = "blue"

//12 classList Property
//obj.classList                 //to check classes
//obj.classList.add("")        //to add new classes
//obj.classList.remove("")      //to remove the classes 
//obj.classList.contains("")    //to check if class exists  ,,, koi classes likha bracket mein hogi to true nhi hogi obj mein to false
//obj.classList.toggle("")      //to toggle between add and remove ,,, class phele se hogi to remove ho jaegi nhi hogi to add ho jaegi
// set attribute se bhi class ki value add kr skte hai but usse sirf ek hi class rhegi purani wali gayab ho jaegi ,,, for multiple classes use classList
//object matlab query selector se koi object banaya
//classList ka main USE//***ye classList add krne ka ye sense hai , jese koi ek css mein esse hi class banakr kuch color bg de rkha hai,, apan js mein vo class kisi ko de do ya add kr do to uspe vo properties laga jaegi uss class ki */


//13 Navigation 
//obj.parentElement    //give parent element  
//obj.chidlCount       //give number of children
//obj.chldren          //give child elements
//obj.previousElementSibling/nextElementSibling     



// 14 Adding Element on Page
// document.createElement('p')         //jp bhi element chiye vo create kr skte hai
// obj.appendChlid(element)
// obj.append(element)               //created element  ke andar ya last mein kuch(text or another new element) add krne ke liye 
// obj.prepend(element)              //starting mein add krne ke liye
// obj.insertAdjacentElement(where,element)     //exactly kaha add krna hai beforebegin afterbegin beforeend afterend

//doc.createElement se koi element banaaya , querySelector se select kiya 
//koi jeses body ko querySelect kiya // body.appendChild(element) esse kiya to body mein last mein vo add ho jaega // esse kisi div ke anadar kr skte ho

//createelement se create hoga appendChild se dikhega 


//15 Removing Elements
// obj.removeChild(element)        //jese puri body mein buttun hai dono ko query select kro body.removeChiild(btn)
// remove(element)              //buttton ko queryselect kiya btn.remove();


//16 Practice Qs
let para_  = document.createElement("p");
para_.innerText = "hii.."
document.querySelector("body").prepend(para_);
para_.classList.add("red");