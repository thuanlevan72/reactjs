import React, {useState} from 'react'

function TodoList() {
   
    const [todos, setTodos] = useState(()=>{
      const dataDoTO = JSON.parse(localStorage.getItem('jods'));
      return dataDoTO ?? [];
    });
    const [todo, setTodo] = useState("");
    const AddTodo = ()=>{
    setTodos(todos => {
      const listTodo = [...todos, todo];
     let StringListTodo = JSON.stringify(listTodo);
     localStorage.setItem("jods", StringListTodo);
      return listTodo;
    })
    setTodo("");
   }
  return (
    <>
    <div className="form">
        <div class="form-group" style={{textAlign: 'left', width: '300px'}}>
          <label for="">Cộng việc mình cần làm</label>
          <input type="text" name="" id="" value={todo} onChange={(val)=>setTodo((x)=>x = val.target.value)} class="form-control" placeholder="" aria-describedby="helpId" />
        </div>
        <button type="submit" onClick={()=>AddTodo()} class="btn btn-primary">Submit</button>
    </div>
    <div style={{textAlign: 'left', width: '500px'}}>
        <ul style={{textAlign: 'left'}}>
            <h1 style={{textAlign: '', paddingTop: '10px',  paddingLeft: '10%'}} >công việc cần làm</h1>
            {todos.map((x, index)=>{
             return <li key={index}>{x}</li>
            })}
        </ul>
    </div>
    </>
  )
}

export default TodoList