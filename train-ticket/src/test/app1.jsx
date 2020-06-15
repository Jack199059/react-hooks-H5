import React,{Component,PureComponent,useEffect,useRef} from 'React';


class Counter extends PureComponent{
     render(){
         const {props} =this;
         return(
             <h1>{props.count}</h1>
         )
     }
}

function useCount(defaultCount){
    const [count,setCount] =useState(defaultCount);
    const it =useRef();
    useEffect(()=>{
       it.current =setInterval(()=>{
           setCount(count=>count+1);
       },1000)
    },[])

    useEffect(()=>{
        if(count>=10){
            clearInterval(it.current)
        }
    });

    return [count,setCount]
}

function App(props){

    const [count,setCount] =useState(0);
 const Counter=useCount(count)
    return(
        <div>
         <button
         type="button"
         onClick={()=>{setCount(count+1)}}>
             {/* Click({count}) */}
             44444
        </button>

     {Counter}

        </div>
        
    );
}
export default App;