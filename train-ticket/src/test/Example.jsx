import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';



function Index(){
    useEffect(()=>{
        console.log("Index页面")
        return ()=>{
            console.log("离开Index,去list")
        }
    })
    return <h2>33333333333</h2>

}




function List(){
    useEffect(()=>{
        console.log("List页面");
        return ()=>{
            console.log("离开List,去Index")
        }
    })
    return <h2>44444444444</h2>

}
function Counter() {
    const [counts, setCounts] = useState(0);
  
    useEffect(() => {
      const id = setInterval(() => {
        setCounts(counts + 1); 
      }, 1000);
      return () => {
          console.log("35")
          clearInterval(id);
        }
    },[counts]);
  
    return <h1>{counts}</h1>;
  }



export default function Example(){
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("count",count);
        return ()=>{
            console.log("===============")
        }
    },[])
    return(
        <div>
            <p>You click {count} times</p>
            <button onClick={()=>{setCount(count+1)}}> 点我</button>

            <Router>
                <ul>
                    <li><Link to='/'> 首页</Link></li>
                    <li><Link to='/list/'> 列表</Link></li>
                    <li><Link to='/Counter/'> 计数器</Link></li>
                </ul>

                <Route path='/' exact component={Index}/>
                <Route path='/list/'  component={List}/>
                <Route path='/Counter/'  component={Counter}/>
            </Router>
        </div>
    )
}