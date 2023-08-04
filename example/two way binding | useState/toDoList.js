import {useState} from 'react';

function App(){

    const [text, setText] = useState('')

    const [list, setList] = useState(() => {
        const data = JSON.parse(localStorage.getItem('toDoList')) || []
        return data
    })

    const handleClick = () =>{
        setList(pre => {
            const data = [...pre, text]
            localStorage.setItem('toDoList', JSON.stringify(data))
            return data
        })
        setText('')

    }

    return (
        <div style = {{padding: 32}}>
            <div>
                <input 
                type = "text"
                value = {text}
                onChange = {e => setText(e.target.value)}
                />
                <button onClick = {handleClick}>Add</button>
            </div>
            <div>
                <ul>
                    {list.map((item, idx) => (
                        <li key={idx}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App;