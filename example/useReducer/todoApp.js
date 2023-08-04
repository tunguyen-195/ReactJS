import {useReducer, useRef} from 'react'

// useReducer
// 1. Init state
// 2. Action: Up (state + 1) /Down (state -1)
// 3. Reducer 
// 4. Dispatch

//Init state
const initialState = {
  job: '',
  jobs: []
}

// Action
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload
  }
}

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload
  }
}

//Reducer
const reducer = (state, action) => {
  switch(action.type){
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      }
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      case DELETE_JOB:
        const newJobs = [...state.jobs]
        newJobs.splice(action.payload,1)
        return {
          ...state,
          jobs: newJobs
        }
    default:
      throw new Error('Invalid action')
  }
}

function App(){

  const inputRef = useRef()
  const [state, dispatch] = useReducer(reducer,initialState)
  const { job,jobs }= state

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }

  return (
    <div style ={{padding: 32}}>
      <div>
        <input
          ref = {inputRef}
          type='text'
          value={job}
          onChange={e => { dispatch(setJob(e.target.value))}}
          placeholder='type something...'
        />
        <button
          onClick={handleSubmit}
        >Add</button>
      </div>
      <div>
          <ul>
            {jobs.map((item, idx) => (
              <li 
                key={idx}
              > 
                {item} 
                <span onClick = {()=>{dispatch(deleteJob(idx))}} > &times; </span>
              </li>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default App;