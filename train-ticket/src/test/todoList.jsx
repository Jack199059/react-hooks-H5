// import React,{Component,PureComponent,useEffect,useCallback,useRef,useMemo,memo, useState} from 'react';
// import './App.css';
// import {createAdd,
//         createRemove,
//         createSet,
//         createToggle
// } from './action.js';
// let idSeq= Date.now();

// function bindActionCreators(actionCreators,dispatch){
//     const ret={};
//     for(let key in actionCreators){
//         ret[key] = function(...args){
//             const actionCreator =actionCreators[key];        
//             const action = actionCreator(...args);
         
//             dispatch(action);
//         }
//     }
//     return ret;
// }



// const Control = memo(function Control(props){
//     const {addTodo}=props;
//     console.log("props",props)
//     const inputRef=useRef();
//     const onSubmit=(e)=>{
//         e.preventDefault();   
//         const newText = inputRef.current.value.trim();
//         if(newText.length === 0){

//             return;
//         }
//         addTodo({
//             id:++idSeq,
//             text:newText,
//             complete:false,
//         });
     
//         inputRef.current.value='';
//     }
//     return (
//         <div className="control">
//             <h1>
//                 todos
//             </h1>
//             <form onSubmit={onSubmit}>
//                 <input 
//                     type="text"
//                     ref={inputRef}
//                     className="new-todo"
//                     placeholder="What needs to be done?">
//                 </input>
//             </form>
//         </div>
//     )
// });


// const TodoItem=memo(function TodoItem(props){
//     const {
//         todo:{
//             id,text,complete,
//         },removeTodo,
//         toggleTodo
//     }=props;
//     const onChange=()=>{
//         console.log("70")
//         toggleTodo(id)
        
//     }
//     const onRemove=()=>{
//        removeTodo(id)
//     }
//     return(
//         <li className="todo-item">
//             <input type="checkbox" onChange={onChange} checked={complete}/>
//             <label className={complete ? 'complete' :''}>{text}</label>
//             <button onClick={onRemove}>X</button>
//         </li>
//     );
// });
// const Todos =memo(function Todos(props){
//     const {todos,removeTodo,toggleTodo}=props;
//     console.log("86",props)
//     return (
//         <ul>
//             {
//                 todos.map(todo=>{
//                     return (<TodoItem 
//                                 key={todo.id}
//                                 todo={todo}
//                                 removeTodo={removeTodo}
//                                 toggleTodo={toggleTodo}
                             
//                     />);       
//                 })
//             }
//         </ul>
//     )
// });


//   const LS_KEY ='_$-todos_';

//   function TodoList() {
//         const [todos,setTodos]=useState([]);
//         const [incrementCount,setIncrementCount]=useState(0);
//     //     const addTodo=useCallback((todo)=>{
//     //          setTodos(todos => [...todos,todo]);
//     //     },[])
//     //     const removeTodo=useCallback((id) => {
//     //         setTodos(todo=>todo.filter(todo=>{
//     //             return todo.id!=id;
//     //         }));       
//     //     },[]);

//     // const toggleTodo=useCallback((id)=>{
//     //     setTodos(todos=>todos.map(todo=>{
//     //         return todo.id===id
//     //         ?{
//     //             ...todo,
//     //             complete:!todo.complete,
//     //         }
//     //         :todo;
//     //     }))       
//     // },[]);



//     function reducer(state,action){
//         const {type,payload}=action;
//         const {todos,incrementCount}=state;
//       console.log("todos",todos)
//       console.log("type",type)
//       console.log("payload",payload)
//         switch(type){
//             case 'set':
//                 return {
//                     ...state,
//                     todos:payload,
//                     incrementCount:incrementCount+1
//                 };
//             case 'add':
//                 return {
//                     ...state,
//                     todos:[...todos,payload],
//                     incrementCount:incrementCount+1
//                 }
//             case 'remove':
//                 return{
//                     ...state,
//                     todos:todos.filter(todo=>{
//                         return todo.id!=payload;
//                     })
//                 }
//             case 'toggle':
//                 return{
//                     ...state,
//                     todos:todos.map(todo=>{
//                         return todo.id===payload
//                         ?{
//                             ...todo,
//                             complete:!todo.complete,
//                         }
//                         :todo;
//                 })
//             }; 
//     }
    
//     return state;
// }
//     const dispatch=useCallback((action)=>{
//         console.log("11111111111111111111111111111111111111111")
//        const state={
//            todos,
//            incrementCount,
//        };
       
//        const setters={
//            todos:setTodos,
//            incrementCount:setIncrementCount,
//        };

//        const newState =reducer(state,action);
 
//        for(let key in newState){
//            setters[key](newState[key]);
//        }
//     },[todos,incrementCount])

//     useEffect(()=>{
//         const todos = JSON.parse(localStorage.getItem(LS_KEY));
//         // setTodos(todos)
//         dispatch(createSet(todos))
//     },[])


//     useEffect(()=>{
//         localStorage.setItem(LS_KEY,JSON.stringify(todos))
//     },[todos])


  

//     return (
//     <div className='todo-list'>
       
//         <Control 
//         {
     
//         ...bindActionCreators({
//              addTodo:createAdd
//         },dispatch)
//         }/>
//         <Todos 
//         {
//          ...bindActionCreators({
//             removeTodo:createRemove,
//             toggleTodo:createToggle
//          },dispatch)
//         }
//         todos={todos}/>
//     </div>
//     );

//   }

// export default TodoList;



import React,{Component,PureComponent,useEffect,useCallback,useRef,useMemo,memo, useState} from 'react';
 
 

const set = new Set();
 
export default function Callback() {
    const [count, setCount] = useState(1);
    const [val, setVal] = useState('');
 
    const callback = useCallback(() => {    
        console.log("111",count);
    }, [count]);
    console.log("222",callback);
    set.add(callback);
 
 
    return <div>
        <h4>{count}</h4>
        <h4>{set.size}</h4>
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <input value={val} onChange={event => setVal(event.target.value)}/>
        </div>
    </div>;
}
