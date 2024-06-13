//01 Handling Click Event 
function doSomething(){
    console.log("Button is clicked")
}
function Click(){
    return(
        <div>
            <button onClick={doSomething} >Click</button>
        </div>
    )
}


//02 Handling Non-click Events
function handleHover(){
    console.log("hovered")
}
function onDblClick(){
    console.log("double clicked")
}
function NonClick(){
    return(
        <div>
            <button onDoubleClick={onDblClick} >Double click</button>
            <p onMouseHover={handleHover} >Hi, how are you ?</p>
        </div>
    )
}



//03 Event Object
function handleFormSubmit(event){
    event.preventDefault();
    console.log("form is submitted")
}
export default function Form(){
    return(
        <form onSubmit={handleFormSubmit} >
            <input placeholder="enter something"></input>
            <button>Submit</button>
        </form>

    )
}



//04 State in React
export default Counter() {
    let count =0;
    function incCount(){
        count++;
        console.log(count)
    }
    return (
        <div>
        <h3>Count = {count}</h3>
        <button onClick={incCount} > "Increse Count" </button>
        </div>
    )
}
//Jab button pe click krenge to console mein hi count badega h3 mein count badta hua nhi dikhega
//Kyuki ek baar react ne jo render kara deya vo kara diya , esse change  nhi hota
//**State **
//The state is a built-in React object that is used to contain data or information about the component.
//A component's state can change over time ; whenever it changes , the component re-renders.



//05 Hooks
//Hooks were a new addition in React 16.8.
//They let you use state and other React features without writing class.



//06 useState()
//useState is a React Hook that lets you add a state variable to your component.
const [state ,setState] = useState(intialState);   //useState array return krta hai chahe to usko kuch let krke console  kara ke dekh lo , aray mein ddoo cheize hoti hai
//useState returns an array with exactly two values:
//1. The current state. During the first render, it will match the initialState you have passed.
//2. The set function that lets you update the state to a different value and trigger a re-render 

import {useState} from "react" //phele import krn padta hai
export default function Counter(){
    let [count , setCount]=useState(0) 
    let incCount = ()=>{
        setCount(count+1);
    }
    return (
        <div>
            <h3> Count = {count}</h3>
            <button onclick={incCount} > Increase Count</button>
        </div>
    )
}



//07   Create LikeButton
import {useState} from 'react'


export default function Like(){
    let [isLiked , setIsLikesd]= useState(false)
    function toogleLike(){
       setIsLikesd(!isLiked)
    }
    return (
        <p onClick={toogleLike} className="btn">
          { isLiked  ? (<i class="fa-regular fa-heart"></i>) :(<i class="fa-solid fa-heart"></i>)}
        </p>
    )
}



//08 Closure In JS 
//Closure : A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variable
//*In JS, once a function complestes its execution, any variables that were defined inside the function scope cease to exist.
// function outer(){
//     let b =10;
//     function inner(){
//         let a =10
//         console.log(a+b)
//     }
// }
//agar inner() ko call kiya to error ayega

// function outer(){
//     let b =10;
//     function inner(){
//         let a =10
//         console.log(a+b)
//     }
//     return inner;
// }
//ab agar inner() ko call krenge to 30 aa jaega




//09 Re-render _ How does it work_



//10 Callback in Set State Function
//how to change state when it depends on the current value
let incCount = ()=>{
    setCount(count+1); 
    setCount(count+1);
}                                    //yaha doo baar likha but ek- ek krke hi increase hoga
let incCount = ()=>{
    setCount((currVal)=>{
        currVal+1
    }); 
    setCount((currVal)=>{
        currVal+1
    });
}                                    




//11 More about State