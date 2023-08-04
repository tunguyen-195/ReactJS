import {useState} from 'react';

const courses = [
    {id: 1, name: 'JavaScript'},
    {id: 2, name: 'React'},
    {id: 3, name: 'NodeJS'},
    {id: 4, name: 'NextJS'},
  ]

function App(){
    const [check, setCheck] = useState()
    return (
        <div style = {{padding: 32}}>
            {courses.map(course => (
                <div key = {course.id}>
                    <input
                    style = 'radio'
                    checked = {check == course.id}
                    onChange = {()=> setCheck(course.id)}
                    />
                    {course.name}
                </div>
            ))}
        </div>
    )
}
export default App;