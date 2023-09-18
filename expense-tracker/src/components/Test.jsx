import React, {useReducer} from 'react';

export const countContext = React.createContext()
const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return  initialState   
    }

}


export default function Test() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <countContext.provider>
        <div>count - {count.firstCounter}</div>
        <div>count - {count.secondCounter}</div>
        <button onClick={()=> dispatch({type: 'increment', value:1})}>Increment</button>
        <button onClick={()=> dispatch({type: 'decrement', value:1})}>Decrement</button>
        <button onClick={()=> dispatch({type: 'increment', value:5})}>Increment 5</button>
        <button onClick={()=> dispatch({type: 'decrement', value:5})}>Decrement 5</button>
        <button onClick={()=> dispatch({type: 'increment2', value:3})}>Increment counter 2</button>
        <button onClick={()=> dispatch({type: 'decrement2', value:3})}>Decrement counter 2</button>
        <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
   </countContext.provider>
  )
}
