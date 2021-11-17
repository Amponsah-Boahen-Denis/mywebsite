

 import React,{useState,useRef,useEffect} from 'react'
 
 function Too(){
     const [todo, setTodo] = useState('');
     const [todos, setTodos] = useState([]);
     const [etext, setEtext] = useState('');
     const [edit,setEdit] = useState(null);
     const def=useRef(null)
     useEffect(()=>{
     def.current.focus()
        
     },[todo])
     const add=(e)=>{
         e.preventDefault()
         if(todo==='')return alert('enter your todo first!')
         const details={
             id:new Date().getTime(),
             text:todo,
            completed:false,
         }
         setTodos([...todos].concat(details))
         setTodo('')
     }
     const del =(id)=>{
setTodos([...todos].filter((todo)=>todo.id!==id))
     }
     const subt=(id)=>{
         
         if(etext==='') return alert('enter some todo')
const submt=[...todos].map((todo)=>{
    if(todo.id===id){
      todo.text=etext  
    }
    return todo
})
setTodos(submt);
setEdit(null)
setEtext('')
}

     return(
         <div>
         <form onSubmit={add}>
         <input type="text"  onChange={(e)=>setTodo(e.target.value)} value={todo}/> 
         <button type="submit">ADD</button>  
         </form>
         {todos.map((todo)=><div key={todo.id}>
         {edit===todo.id?(<input type="text" onChange={(e)=>setEtext(e.target.value)} ref={def} value={etext}/>):
         (<div>{todo.text}</div>)}
         
         

         <button onClick={()=>del(todo.id)}>DELETE</button>
         {todo.id===edit?(<button onClick={()=>subt(todo.id)}>submit</button>):
         (<button onClick={()=>setEdit(todo.id)}>Edit</button>)}
         
         
         </div>)}
        
         </div>
     )
 }
 
 
export default Too;


