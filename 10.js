//01 DOM Events
//Events are signals that something hass occurred.(user inputs/outputs)
//jese koi button banaya to uske inline(andar) onclick = "console.log('-----');console.log('------')" likh skte hai jese hi click krenge ye console ho jaega
//but inline html code mein js likhna not good 



//02 Mouse_Pointer Events
//onclick (when an element is clicked)
//ommouseenter(when mouse enters an element)
let bttns = document.querySelectorAll(".ME")
console.dir(bttns)
// bttns.onclick=function (){
//      console.log("Button is clicked")
// }
function sayhello(){
    alert("hello")
}
function sayName(){
    alert("Kuldeep")
}
// bttn.onclick = say
// for (bttn of bttns){
//     bttn.onclick = say;
//     bttn.onmouseenter = function(){
//         console.log(":-)")
//     }
// }



//03 Event Listeners
//element.addEventlistener(event,callback)
//onlick meindo chiz nhi alert kara paenge
for (bttn of bttns){
    // bttn.addEventListener("click",sayhello);
    // bttn.addEventListener("click",sayName);
   // bttn.addEventListener("dblclick",function(){console.log(":)")})

}

//04 Activity
let button = document.querySelector(".generate")
button.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    h3.innerText =GenRan();
    let div = document.querySelector("div")
    div.style.backgroundColor = GenRan()
})
function GenRan(){
    let red  = Math.floor(Math.random()*255);
    let blue  = Math.floor(Math.random()*255);
    let green  = Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}



//05 Event Listeners for Element
let p = document.querySelector("p")
p.addEventListener("click",function(){
    console.log("para was clicked")
})


//06 this in Event Listeners
//When 'this' is used in a callback of event handler of something , it refers to that something
let me1 = document.querySelector("#ME1")
me1.addEventListener("click",function(){
    console.dir(this);
    console.dir(this.innerText)
    this.style.backgroundColor ="blue"
})


//07 Keyboard Events
let me2 = document.querySelector("#ME2")
me2.addEventListener("click",function(event){     //default arguement hota hai event
    console.log(event)
    console.log("Button wass clicked")
})
let input = document.querySelector("#input1")
input.addEventListener("keydown",function(event){
    console.log(event.key)                            //yaha bhi event hai event mein main doo chize key and code key too ko type kiya hai uska kesa input hoga aur code uska code
    console.log(event.code) 
    console.log("key pressed")
})
input.addEventListener("keyup",function(){
    console.log("key released")
})


//08 Form Events
let form = document.querySelector("form")
//      form.addEventListener("submit",function(event){
//           event.preventDefault();    //Submit krte hi dusre page pe nhi bejega isse 
//           alert("form submitted")
//      })


//09 Extracting Form Data
form.addEventListener("submit",function(event){    //apna event submit hoga waha
    event.preventDefault();   
    let inp = document.querySelector("#input2")  // let inp = this.elements[0]   //esse username password hota too username this.element[0] aur password this.elemnet[1] likh skte the kyuki dono form mein rhtte
    console.dir(inp) 
    console.log(inp.value)
})
//example
let formm = document.querySelector("#formm")
formm.addEventListener("submit",function(event){
    event.preventDefault();
    let user = this.elements[0];  //formm.elements[0]
    let pass =  this.elements[1];  //formm.elements[1]

    console.log(user.value)
    console.log(pass.value)
})


//10 More Events
//change event = The changes event occurs when the value of an element has been changed (only works on <input>,<textarea>,and <select> elements) //
//input event = The input fires whwn the value of <input>,<textarea>,and <select> has been changed  // koi chota sa change hote hi ye fire ho jaega
//change event tab fire hoga jab value change krke bahar click karenge ,,,, input fire hota jata hai jese jese change krte hai

let user = document.querySelector("#user")
user.addEventListener("change",function(){
    console.log("change event");
    console.log("final value" , this.value)
})
user.addEventListener("input",function(){
    console.log("input event");
    console.log("final value" , this.value)
})
//Input event do not trigger on non characteristic changes
//Text Editor
let paragraph = document.querySelector(".para");
let write = document.querySelector("#write");
write.addEventListener("input",function(){
    console.log(write.value);
    paragraph.innerText = write.value;
})