//01 React Props
//Props are the informatin that you pass to a JSX tag.
function  Product({title , price = 300}){          //price ko default value dedi 300
    return (
        <div className = "Product">
            <h4> {title} </h4>
            <p> Price : {price} </p>
        </div>
    )
}
function ProductTab(){
    return(
        <>
            <Product name="laptop" price="50000" / >;      //number string mein store karaya 
            <Product name="laptop" price= {50000} / >       // number ko direct store karana hai to {} mein store kena hoga
        </>
    )
}



//02 Passing Arrays to Props
features = {["fast","reliable"]}
features = {{a:"fast",b:"reliable"}}

function ProductTab(){
    return(
        <>
            let features1 = ["fast","reliable"]
            let features2 = {a:"fast",b:"reliable"} 
            <Product name="laptop" price="50000"  features ={features1} feeatures={features2}  / >;    
            <Product name="phone" price= {20000} / > 
            <Product name="pen" price="50000" / >;         
        </>
    )
}
function  Product({title , price,features,feeatures}){          
    return (
        <div className = "Product">
            <h4> {title} </h4>
            <p> Price : {price} </p>
            <p> {features} </p>
            <p> {feeatures.a} </p>
        </div>
    )
}

//array mein to fastreliable print hoga , koi gap nhi rhega
//object puri print nhi hoti uski .a kr diya to bass fast print ho jaega


//03 Rendering Array
let features1 = [<li>"fast"</li>,<li>"reliable"</li>]
// array ko esse likho to bullet point dekhenge apko
//or
//let list = fearures.map((feature)=><li>{feature}</li>)
//aur list ko render kara denge
<p>{list}</p>
//or
//direct hi likh denge
<p>
    {features.map((feature)=>(
        <li>{feature}</li>
    ))}
</p>



//04 Conditionals
//Adding elements on the basis of some condition
{price >= 10000 ? <p>Dicount : 5%</p> : null }
//or
{price >= 10000 && <p>Dicount : 5%</p> }  //&& ke agge wala false hoga to piche wala exceute hi nhi hooga




//05 Dynamic Component Styling
function  Product({title , price}){ 
        let styles ={ backgroundColor : price>3000 ? "pink" : ""}         
    return (
        <div className="Product" style={styles}>
            <h4> {title} </h4>
            <p> Price : {price} </p>
            {price >30000 && <p>Discount is 5%</p> }
        </div>
    )
}
// CSS mein background-color lihkte hai but JSX mein backgroundColor (bcoz it follow camelCase)




//06 Activity
//Show a Hello Message to the user in Different Colours.
//Pass 2 values as props : userName & textColor
export default function Show({userName, textcolor}){
    return(
        <>
        <p style={{color :textcolor}}>{userName}</p>
        </>
    )
}
function App() {
  return  (
    <Show userName="kuldeep" textcolor="red" / >
  )
}



//07 Install React Devellopers Tools


//08 Activity _Amazon Cards
//Listing.jsx
import "./Listing.css"
export default function Listing({title, description,idx}){

    let oldP = ["12,495","11,999","1,599","599"]
    let newP = ["8,999","9,199","899","249"]
    return(
        <div className="item">
        <h3>{title}</h3>
        <p>{description.map((el)=>(<li>{el}</li>))}</p>
        <div className="price">
            <p style={{textDecorationLine:"line-through"}}>{oldP[idx]}</p>
            <p><b>{newP[idx]}</b></p> 
        </div>
        </div>
        
    )
}
//App.jsx
import './App.css'
import Listing from "./Listing"

function App() {
  return  (
    <>
    <h1>BlockBuster Deals | Shop Now</h1>
    <Listing title="Logitech MX Master 35" idx={0} description={["8000 DPI","Programmable Buttons"]} />
    <Listing title="Apple Pencil(2nd Geb)" idx={1} description={["Intuitive touch Interface","Designed For iPad Pro"]}/>
    <Listing title="Zebronics Zeb-Transformer" idx={2} description={["Intuitive touch Interface","Designed For iPad Pro"]}/>
    <Listing title="Portronics Toad 23 Wireless Mouse" idx={3} description={["Wireless Mouse 2.4GHz","Optical Orientation"]}/>
    </>
   
  )
}

export default App

//Listing.css
.item{
    
    border: 1px white solid;
    border-radius: 1rem;
    background-color: rgb(162, 255, 255);
    color: black;
    width: 400px;
    margin: auto;
    margin-top: 1rem;
}
.price{
    background-color: rgb(234, 216, 59);
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    margin-bottom: -20px;
}