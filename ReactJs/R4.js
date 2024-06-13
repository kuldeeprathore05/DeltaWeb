/****https://react.dev/learn/updating-arrays-in-state //padho****/

//01  Objects_State
import  {useSate} from "react"
export default function Ludo(){
    let [moves,setMoves] = useState({blue:0,red:0,green:0,yellow:0})

    let updateBlue=()=>{
        moves.blue +=1;
        setMoves({...moves});
    }


    return(
        <div>
            <p>Game Begins!</p>
            <div className="Board">
                <p>Blue moves = {moves}</p>
                <button onClick={updateBlue} style={{backgroundColor:"blue"}}  >+1</button>
                <p>Yellow moves = {moves}</p>
                <button  style={{backgroundColor:"yellow"}} >+1</button>
                <p>Red moves = {moves}</p>
                <button   style={{backgroundColor:"red"}} >+1</button>
                <p>Green moves = {moves}</p>
                <button  style={{backgroundColor:"green"}}>+1</button>
            </div>
        </div>
        

    )
} 
//updateBlue mein setMoves({...moves}) ye llikha padega apne ko spread krna padega object ko  , nhi to object change nhi hoti purani hi render hoti hai
//Also we can write
setMoves({...moves , blue : moves.blue+1})
//Also we can write as callback
setMoves((preMoves)=>{
    return {...preMoves , blue: preMoves.blue +1}
})
//esee hi sabhi color ke  like function create kr skte hai




//Array_State
import  {useSate} from "react"
export default function Ludo(){
    let [arr,setArr] = useState(["no moves"])

    let updateBlue=()=>{
        setArr([...arr],"blue move")
    }

}
//or
let updateBlue=()=>{
    setArr((preArr)=>{
        return [...preArr , "blue moves"]
    })
}

//Isme bhi spread krna padta  kyuki , change krte hai to ussi arry mein change ho jata hai jisko ye re-render nhi karata



//03 Create Todo List
import { useState } from "react"
export default function Todo(){
    let [todos,setTodos] = useState(["hi"]);
    let [newTodo, setNewTodo]=useState("");
    
    let addNewTAsk=()=>{
        setTodos((preTodo)=>{
            return [...preTodo,newTodo]
        })
        setNewTodo("")
    }
    let updateTodoValue =(event)=>{
        setNewTodo(event.target.value)
    }

    return(
        <div> 
            <input
            placeholder="Enter task" 
            value={newTodo}
            onChange={updateTodoValue}
            type="text" />
            <button onClick={addNewTAsk}>Add Task</button>
            <ul>
                {todos.map((el)=>(<li>{el}</li>))}  
                
            </ul>
        </div>
    )
}





//04 Unique Key for List Items
//Haar list item ke pass khudki key(id) honi chayie
//npm i uuid --> import { v4 as uuidv4 } from 'uuid';
//array ko ab array of object banana pdega jisme task hoga aur id hogi
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
export default function Todo(){
    let [todos,setTodos] = useState([{task:"hi",id:uuidv4()}]);
    let [newTodo, setNewTodo]=useState("");
    
    let addNewTAsk=()=>{
        setTodos((preTodo)=>{
            return [...preTodo,{task:newTodo , id:uuidv4()}]
        })
        setNewTodo("")
    }
    let updateTodoValue =(event)=>{
        setNewTodo(event.target.value)
    }

    return(
        <div> 
            <input
            placeholder="Enter task" 
            value={newTodo}
            onChange={updateTodoValue}
            type="text" />
            <button onClick={addNewTAsk}>Add Task</button>
            <ul>
                {todos.map((el)=> (<li key={el.id} > {el.task} </li>) )}  
                
            </ul>
        </div>
    )
}





//05 Deleting from Arrays
//to  delete we will use filter - filter ek nyi copy create kr deta hai array ki - vo to show honge jinki id not equal hai jiske delete pe click kiya hai
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
export default function Todo(){
    let [todos,setTodos] = useState([{task:"hi",id:uuidv4()}]);
    let [newTodo, setNewTodo]=useState("");
    
    let addNewTAsk=()=>{
        setTodos((preTodo)=>{
            return [...preTodo,{task:newTodo , id:uuidv4()}]
        })
        setNewTodo("")
    }
    let updateTodoValue =(event)=>{
        setNewTodo(event.target.value)
    }

    let deleteTodo =(id)=>{
        setTodos(todos.filter((todo)=> todo.id != id))
    }

    return(
        <div> 
            <input
            placeholder="Enter task" 
            value={newTodo}
            onChange={updateTodoValue}
            type="text" />
            <button onClick={addNewTAsk}>Add Task</button>
            <ul>
                {todos.map((el)=> (<li key={el.id} > 
                <span> {el.task} </span>
                <button onClick={()=>deleteTodo(todo.id)}> Delete</button>              //onClick={()=>deleteTodo(todo.id)} ke andar function likha  hai kyuki iski id deleteTodo functioon ko bejni hai 
                </li>) )}  
                
            </ul>
        </div>
    )
}








//06 Update All in Array
// ek niche button bananya UPPERCASE ALL ka then usne onClick ={upperCaseAll}
let upperCaseAll =()=>{
    setTodos(
      todos.map((todo)=>{
        return {
            ...todo,
            task : todo.task.toUpperCase()
        }
    })
    )
}    



//07 Update One in Array
let upperCaseOne= (id)=>{
    setTodos(
        todos.map((todo)=>{
            if(todo.id==id){
                return {
                    ...todo,
                    task : todo.task.toUpperCase()
                }
            }
            else{
                return todo;
            }
        })
    )
}
//aur button bana do sabke liye jisme onClick ={()=>upperCaseOne}




//08 Add a _Marks as Done_Feature to Todo
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
export default function Todo(){
    let [todos,setTodos] = useState([{task:"hi",id:uuidv4() , isDone:"false"}]);
    let [newTodo, setNewTodo]=useState("");
    
    let addNewTAsk=()=>{
        setTodos((preTodo)=>{
            return [...preTodo,{task:newTodo , id:uuidv4(),isDone:"false"}]
        })
        setNewTodo("")
    }
    let updateTodoValue =(event)=>{
        setNewTodo(event.target.value)
    }

    let deleteTodo =(id)=>{
        let copy = todos.filter((todo)=> todo.id != id)
    }

    let markDoneOne=(id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id==id){
                    return{
                        ...todo,sDone:"true"
                    }
                }
                else{
                    return todo
                }
            })
        )
    }

    return(
        <div> 
            <input
            placeholder="Enter task" 
            value={newTodo}
            onChange={updateTodoValue}
            type="text" />
            <button onClick={addNewTAsk}>Add Task</button>
            <ul>
                {todos.map((el)=> (<li key={el.id} > 
                <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}> {el.task} </span>
                <button  onClick={()=>markDoneOne(todo.id)}>Mark Done</button>
                <button onClick={()=>deleteTodo(todo.id)}> Delete</button>              //onClick={()=>deleteTodo(todo.id)} ke andar function likha  hai kyuki iski id deleteTodo functioon ko bejni hai 
                </li>) )}  
                
            </ul>
        </div>
    )
}