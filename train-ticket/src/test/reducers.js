const reducers={
    todos(state,action){
        console.log("...state",...state)
        const {type,payload}=action;
        console.log("payload",payload)
        switch(type){
            case 'set':
                return payload;
            case 'add':
                return [...state,payload];
               
            case 'remove':
                return state.filter(todo=>{
                        return todo.id!=payload;
                    });
                
            case 'toggle':
                return state.map(todo=>{
                        return todo.id===payload
                        ?{
                            ...todo,
                            complete:!todo.complete,
                        }
                        :todo;
                });
       }
    },

    incrementCount(state,action){
        const {type}=action;
        switch(type){
            case 'set':
               
            case 'add':
                return state+1;
         
        }
        return state;
    }
}


function combineReducers(reducers){

    return function reducer(state,action){
        const changed={};
        for(let key in reducers){
            console.log("action:",action)
            console.log("state:",state)
            console.log("state[key]:",state[key])
            console.log("reducers:",reducers[key])
            changed[key] =reducers[key](state[key],action);
        }
        console.log("changed",changed)
        return {
            ...state,
            ...changed,
        }
    }
}

export default combineReducers(reducers)