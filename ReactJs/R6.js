//01 Form in React
//The standard way with Forms is to use COntrolled Componentts.So we make React state to be the "single source of truth".
//In HTML, form elements such as <input> ,<textarea>and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically ket in the state properly of components, and only updated with setState().
//We can combine the two by making the React state be the "single source of truth". Then the React component that renders a form also controls what happens in that form on subsequent user input. 
//An input form element whose value is controlled by React in this way is called a "controlled component".


//**Matlab form ki khud ki state hoti hai , aur form update hota reta hai jese input change hota hai . but in React mutable(changable) chiz ko useState mein rkhte hai. Therefore form ko useState se associate krte hai **\\
import { useState } from "react";
export default function Form(){
    let [fullName , setFullName] = useState("")

    let handleNameChange =(event)=>{
        console.log(event.target.value)
        setFullName(event.target.value)
    }

    return (
        <form>
            <input 
            placeholder="Enter full name"
            value={fullName}
            onChange={handleNameChange}
            ></input>
            <button></button>
        </form>
    )
}

// Value aur onChange kiya input mein
//input mein change krenge -> onChange function ko call krega -> handleNameChange setFullName mein apni value ko bejega ->  fullName badal jaega -> value mein fullName likh rkha hai to vo dikhega waha




//02 Labels in React
// for is used in JS(fo loop ) resreved keyword to label mein use nhi kr skte
<label htmlFor="username">Full name</label>
<input id="username"></input>





//03+04 Handling Multiple Inputs + Comments Form
//Agar form mei bhot sare inputs hai to sabke liye useState() nhi likhenge ... object bana denge example
//We create a common handleInputChange() for all elements
// event.target.name    - changed field
// event.target.value   - new value of the field

import {useState} from "./React"
export default function Foorm(){
    let [formData,setFormData] = useState({
        username:"",
        remark :"",
        rating :""
    })
    let handleInputChange=(event)=>{
        setFormData((currData)=>{
            return {...currData , [event.target.name]: event.target.value}
        })
    }

    let handleSubmit=(event)=>{
        console.log(formData)
        event.preventDefault();
        setFormData({
            username:"",
            remark :"",
            rating :""
        })
    }

    return(
        <form>
            <input 
            placeholder="Enter Username" 
            name="username" 
            value={formData} 
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            ></input>

            <br></br> <br></br>

            <textarea 
            placeholder="Enter Remarks" 
            name="remark" value={formData} 
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            ></textarea>

            <br></br> <br></br>

            <input 
            placeholder="Enter Rating" 
            name="rating" value={formData} 
            type="number" 
            min={1} 
            max={5} 
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            ></input>
        </form>
    )
}

//**yaha uper object mein  username : "" likha too input mein bhi name="username" likhna taki event.taget.name usse field ko pakad ske
// [event.target.name] = event.target.value  // [variable] -  compued property name - phele variable ki value evaluate hogi uske badd use hogi 
// event.preventDefault(); ye to default property hoti hai form ki unhe hata deta hai ,,, jese submit karate hai input khali , aur bhiessi bhot si
// setFormData({username:"",remark :"",rating :""}) ye likha taki submit krte hi sbki value "" ho jae


//handleInputChange mein esse bhi likh skte the
let handleInputChange=(event)=>{
    let fileName = event.target.name;
    let newValue = event.target.value;
    setFormData((currData)=>{
        currData[fileName]=newValue;   // yaha bhi object mein currData."filename" ye use nhi kiya kyuki , currData[filename] mein phele  variable andar compute hoga fir use hoga
        return{...currData}
    })

}






//05 useEffect()
//The Effect Hook lets you perform side effects in function components.
//Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.
//useEffect ke bare mein React.dev pe padho 
//useEffect(func , dependencies(optional))
import {useState , useEffect}from "react"
export default function Counter(){
    let [count , setCount ] = useState(0);
    const incCount =()=>{
        setCount((curCount)=> curCount +1)
    };
    useEffect(function sideEffect(){
        console.log("this is the side effect")
    })
    return (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={incCount}> +1 </button>
        </div>
    )
}



//Dependencie in useEffecct()
//useEffect(setup,dependencies?)
import {useState , useEffect}from "react"
export default function Counter(){
    let [countx , setCountx ] = useState(0);
    let [county , setCounty ] = useState(0);
    const incCountx =()=>{
        setCountx=((curCount)=> curCount +1)
    };
    const incCounty =()=>{
        setCounty=((curCount)=> curCount +1)
    };
    useEffect(function sideEffect(){
        console.log("this is the side effect")
    },
    [countx]
    )
    return (
        <div>
            <h1>Count = {countx}</h1>
            <button onClick={incCountx}> +1 </button>
            <h1>Count = {county}</h1>
            <button onClick={incCounty}> +1 </button>
        </div>
    );
}

//dependencies mein sirf countx likha to countx render - re render hoga tab hi useEffect wala function run hogga
//agar dependencies meinn [] ye likha too , first time render krenge tab hi useEffect wala function run hoga




//Use Cases
//API Calls - Asynchronous Operations
import { useState,useEffect} from "react"
export default function Joker(){
    let [joke,setJoke]=useState({})

    const URL = "https://official-joke-api.appspot.com/random_joke";
    const getNewJoke = async()=>{
        let response = await fetch(URL);
        let jsonResopnse = await response.json();
        console.log(jsonResopnse);
        setJoke({setup:jsonResopnse.setup, punchline :jsonResopnse.punchline})
    }

    useEffect(()=>{
        async function getFirstJoke(){
            let response = await fetch(URL);
            let jsonResopnse = await response.json();
            console.log(jsonResopnse);
            setJoke({setup:jsonResopnse.setup, punchline :jsonResopnse.punchline})
        }
        getFirstJoke();
    },[])
    return(
        <div>
            <h3>Joker!</h3>
            <h2>(joke.setup)</h2>
            <h2>(joke.punchline)</h2>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
}

//useEffect mein ()=>{} ke anadar async function likha aur fir usko ruun kr denna
//yaha useEffect isiliye use kiya kyuki first time render kre tab bhi joke aye
