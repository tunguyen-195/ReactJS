import {useState} from 'react';

const courses = [
    {id: 1, name: 'JavaScript'},
    {id: 2, name: 'React'},
    {id: 3, name: 'NodeJS'},
    {id: 4, name: 'NextJS'},
  ]

function App(){
    const [check, setCheck] = useState([])
    const isCheck = (id) =>{
        return check.includes(id)
    }
    const handleCheck = id => {
        setCheck(pre => {
            if(isCheck(id)){
                return check.filter(item => item !== id)
            }
            else{
                return [...pre, id]
            }
        })
    }
    return (
        <div style = {{padding: 32}}>
            {courses.map(course => (
                <div key = {course.id}>
                    <input
                    type = 'checkbox'
                    checked = {isCheck(course.id)}
                    onChange = {()=> handleCheck(course.id)}
                    />
                    {course.name}
                </div>
            ))}
        </div>
    )
}


export default App;