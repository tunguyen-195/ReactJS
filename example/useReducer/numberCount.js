// useReducer
// 1. Init state
// 2. Action: Up (state + 1) /Down (state -1)
// 3. Reducer 
// 4. Dispatch

import {useReducer} from 'react'

// Init state
const initState = 0

// action
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

//Reducer

const reducer = (state, action) =>{
  switch(action){
    case UP_ACTION:
      return state + 1

    case DOWN_ACTION:
      return state - 1

    default:
      throw new Error('Invalid action')
  }
}
function App(){
  const [count, dispatch] = useReducer(reducer, initState)

  return (
    <div style ={{padding: 32}}>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick = {() => dispatch(UP_ACTION)}>Start</button>
      <button onClick = {() => dispatch(DOWN_ACTION)}>Stop</button>
    </div>
  )
}

export default App;