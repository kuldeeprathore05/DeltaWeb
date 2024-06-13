//What is React_
//JavaScript Library for creating UI
//React lets you build user interface out of individual pieces called components.
//react.dev website 



//02 JSX
//JavaScript Extension Syntax
//It Lets us write HTML directly inside JS
// JSX(html+js) ---> Babel(coverts internally) ---> JS
//Babeljs.io pe dekh skte ho



//03 Set up local Environment
//Create-React-App v/s Vite    //phele Create-React-App use hota tha ab Vite use hota hai bcoz it is faster
//vitejs.dev pe ja skte ho dekhne ke liye

//make folder -> npm create vite@latest -> select React -> select javascript 
//bhot sare files folder dikhenge ab folder mein
//package.json hoga but package-loc.json nhi hai isilye
//cd <project name>  -> npm install

// npm run dev            //to start the server




//04 Understanding our App
//index.js hoti hai usme div jiski id root  & script with src main.jsx
// main.jsx bolta hai root mein App render kara do & App imported from app.jsx



//05 Re-write App
//app.jsx mein se sab faltu hata do , bas itna rene do
import './App.css'

function App() {
  return (
    <h1>Hello</h1>
  )
}

export default App



//06 Our 1st Component
//Componrnt is a reusable & independent piece of code.
//Creating a componenet
function Title(){                    //Component ka name ka first letter in capital
    return <p>Hello World</p>
}
//Rendering a component 
<Title></Title>  or  <Title/>

// return mein sirf ek hi chiz likh skte hai
//agar tume jyda chize likhni ho to ek div likho usko andar likh do

//Acco to convention we make d/f files for d/f components and the importy-export




//07 Import_export
//Import 
//import Title from "./Title.jsx";
//Default Export
//export default  Title;

//Named Export
// export {Title};
// import {Title} from "./Title.jsx";

// In summary, named exports are useful when you want to export multiple values and import them with their specific names ,wwhile default exports ae handy for exporting a single value and giving it a custom name when iporting. The choice between the two depends on the structure and requirements of your codebase



//08 Writing Markup in JSX
//ReactJs.dev -> Learn React -> Writing Markup with JSX -> Scroll ->The Rules of JSX 
//1- Return a single root element  -To return multiple elements from a component, wrap them with a single parent tag.
//2- CLose all the tags            -JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>
//3- camelCase most of the things  -ince class is a reserved word, in React you write className instead
//Dehhk skte ho ye rules jake


//09 React Fragment
//Fragments let you group a lsit of children without adding extra nodes to the DOM.
// multiple chiz return krni hoti hai to div banke sabko div andr rkha dete hai , isse ek extra node create ho gaya isiliye
// <> </> ye use kr skte hai div ki jagh



//10 JSX with Curly Braces
// Curly Braces {} ke andar pure javascript likh skte hai
//EG
import './App.css'
let name = "kuldeep"
function App() {
  return (
    <>
    <h1>Hi {name.toUpperCase()}</h1>
    <p> 2*2={2*2} </p>
    </>
  )
}
export default App




//11 Structuring Components




//12 Style Components
//D/f components ke liye d/f css file banao fir unhe imports kr lo
// import :"./Title.css"