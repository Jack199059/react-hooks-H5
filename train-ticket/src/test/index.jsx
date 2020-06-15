import React, {Component,useState,createContext,useContext,useMemo,memo} from 'react';
import './App.css';

const CountContext =createContext();

// class Foo extends Component{
//     render(){
//         return(
//          <CountContext.Consumer>
//              {
//                  count =><h1>{count}cc</h1>
//              }
//          </CountContext.Consumer>
//         );
//     }
// }


// class Bar extends Component{
//     static contextType=CountContext;
//     render(){
//         const count =this.context;
//         return(
//                 <h1>{count}cc</h1>
    
//         );
//     }
// }


// function Counter(){
//     // const count=useContext(CountContext)
//     return(
//         <h1>{count}</h1>
//     )
// }
// function App1(props){
//     const [count,setCount] =useState(10);
   
//     return(
//         <div>
//          <button
//            onClick={()=>{setCount(count+1)}}>Click({count})  
//         </button>

//         <CountContext.Provider value={count}>
//               <Foo></Foo>
//               <Bar></Bar>
//               <Counter></Counter>
//         </CountContext.Provider>
//         </div>
        
//     );
// }


function App2(props){
    const [count,setCount] =useState(0);
   
    const double=useMemo(()=>{
        return count*2;
    },[count===3]);

    return(
        <div>
         <button
           onClick={()=>{setCount(count+1)}}>Click({count}),double:({double}) 
        </button>
{/* 
        <CountContext.Provider value={count}>
              <Foo></Foo>
              <Bar></Bar>
              <Counter></Counter>
        </CountContext.Provider> */}
        </div>
        
    );
}
export default App2;