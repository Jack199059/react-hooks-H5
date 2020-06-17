import React,{Component,PureComponent,useEffect,useCallback,useRef,useMemo, useState} from 'react';
import './App.css';
let idSeq=Date.now();
function Control(props){
    const {addTodo}=props;
    const inputRef=useRef();

    const onSubmit=(e)=>{
        // alert("2121")
        e.preventDefault();
        console.log("newText",inputRef)
        const newText = inputRef.current.value.trim();
 
        if(newText.length === 0){
            return;
        }

        addTodo({
            id:++idSeq,
            text:newText,
            complete:false,
        });
        inputRef.current.value='';
    }
    return (
        <div className="control">
            <h1>
                todos
            </h1>
            <form onSubmit={onSubmit}>
                <input type="text"
                className="new-todo">
                </input>
            </form>
        </div>
    )
}


function TodoItem(props){
    const {
        todo:{
            id,text,complete,
        },toggleTodo,
        removeTodo,
    }=props;

    const onChange=()=>{
        alert("dsd")
        toggleTodo(id)
        
    }
    const onRemove=()=>{
         removeTodo(id)
    }
    return(
        <li className="todo-item">
            <input ype="checkbox" onChange={onChange} checkbox={complete}/>
            <label className={complete ? 'complete' :''}>{text}</label>
            <button onClick={onRemove}>X</button>
        </li>
    );
}
function Todos(props){
    const {todos,toggleTodo,removeTodo}=props;
    return (
        <ul>
            {
                todos&&todos.map(todo=>{
                    return (<TodoItem 
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        removeTodo={removeTodo}
                    />);

               
                })
            }
        </ul>
    )

}

function WithMemo() {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
    const expensive = useMemo(() => {

        let sum = 0;
        for (let i = 0; i < count * 100; i++) {
            sum += i;
            console.log('sum',sum);
        }
        return sum;
    }, [count]);
 
    return <div>
          <h4>{count}</h4>
          <h4>{expensive}</h4>
        <h4>{count}-{expensive}</h4>
        {val}
        <div>
            <button onClick={() => setCount(count + 1)}>点击</button>
            <input value={val} onChange={event => setValue(event.target.value)}/>
        </div>
    </div>;
}
function TodoList() {
    const [todos,setTodos]=useState([]);

    const addTodo=useCallback((todo)=>{
      setTodos(todo => [...todos,todo])
    },[])

        const removeTodo=useCallback((id) => {
            setTodos(todo=>todo.filter(todo=>{
                return todo.id!=id;
            }));       
        },[]);

    const toggleTodo=useCallback((id)=>{
        setTodos(todos=>todos.map(todo=>{
            return todo.id===id
            ?{
                ...todo,
                complete:!todo.complete,
            }
            :todo;
        }))       
    });

    return (
    <div className='todo-list'>
        <Control addTodo={addTodo}/>
        <Todos removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        <WithMemo />
    </div>
    );

}

export default TodoList;