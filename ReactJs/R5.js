

//02&3 Lottery Game (Part a&b)
import { useState } from "react"
let genTicket=(n)=>{
    let arr = new Array(n)
    for(i=0;i<n;i++){
        arr[i]= Math.floor(Math.random()*10)
    }
    return arr;
}
function sum(arr){
    return arr.reduce((sum,curr)=>sum+curr,0)
}
export default function Lottery(){
    let [ticket,setTicket]=useState(genTicket(3))
    let isWinning = sum(ticket)==15

    let buyTicket=()=>{
        setTicket(genTicket(3))
    }
  
    return(
        <div>
            <h1>Lottery Game!</h1>
            <div>
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
                
            </div>
            <button onClick={buyTicket}>Buy new ticket</button>
            <h3>{isWinning && "Congratulations"}</h3>
        </div>
    )
}

//ye function ko ek helper.js namm ki file mein rkha diya hai
//jab code likhe rhe the too genTicket function mein return arr; nhi likha ttha , ganda error aya tha , don't forget to return something from function




//04 Changes to Lottery
// App ---> Lottery(game)  ---> Ticket ---> Ticket number 0, Ticket number 1, Ticket number 2,... 
//Now question is that ki ticket state ko kaha define krenge 
//If you think Ticket component mein , to fir Lottery wale component mein winning condtition kese check krenge , kyuki ticket ki value ko upper(parent) ko to de nhi skte
//Iiliye usse Lootery component mein banaenge , props ki form mein child component mein pass kr skte hai

//There is specific Design Pattern = State Design Pattern
//Sharing State between Components
//Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. 
//This is known as lifting state up, and it’s one of the most common things you will do writing React code.






//05 Component Types
//-Logical -> smart | state(inme state hoti hai) | state change hoti hai logic use krti hai
//-Presentational -> dumb | no state(props ho skte hai but state nhi hoti) | UI mein elements ko dikhate hai bass

//Component ko design krna hai to ye teen chize socho
//-Props (konse variable ko prop mein rkhna hai)
//-State  (konse variable ko state mein rkhna hai)
//-Events (konse events ke liye function method define krne hai)



//06 Ticket component
//TicketNum --- Prop :num || State: none || Events :none
//TicetNum.jsx
export default function TicketNum({num}){
    return <span>{num}</span>
}
//Ticket --- Prop :ticket[] of size n || State: none || Events :none
import TicketNum from './TicketNum'
export default function Ticket({ticket}){
    return (
        <div>
            {ticket.map((num,i)=>(
            <TicketNum num={num} key={i}/>
            ))}
        </div>
    )
}


//07  Lottery component
//Lottery - Props : n ,winningSum ||  State  : Ticket[]   || Events : buyTickets()
//Lotter.jsx
import { useState } from "react"
import { genTicket,sum } from "./helper"
import Ticket from "./Ticket"
export default function Lottery({n=3,winningSum=15}){
    let [ticket,setTicket]=useState(genTicket(3))
    let isWinning = sum(ticket)==winningSum

    let buyTicket=()=>{
        setTicket(genTicket(3))
    }
  
    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy new ticket</button>
            <h3>{isWinning && "Congratulations"}</h3>
        </div>
    )
}


//App.jsx
import Lottery from "./Lottery"

function App(){
    return (
        <>
        <Lottery n={3} winningSum={15}/>
        </>
    )
}





//08 Functions as Props
// JS  Functions are 1st Class Objects
// This means they can be passed to a function as arguement, returned from it & assigned to a variable.
//EG
//Lotter.jsx
import { useState } from "react"
import { genTicket,sum } from "./helper"
import Ticket from "./Ticket"
export default function Lottery({n=3,winCond}){
    let [ticket,setTicket]=useState(genTicket(3))
    let isWinning = winCond(ticket)

    let buyTicket=()=>{
        setTicket(genTicket(3))
    }
  
    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy new ticket</button>
            <h3>{isWinning && "Congratulations"}</h3>
        </div>
    )
}


//App.jsx
import Lottery from "./Lottery"

function App(){
    let winningCond=(ticket)=>{
        return ticket.every((num)=> num===ticket[0])
    }
    return (
        <>
        <Lottery n={3} winCond={winningCond}/>
        </>
    )
}
