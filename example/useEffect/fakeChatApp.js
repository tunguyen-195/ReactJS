import { useEffect, useState } from "react";

const courses = [
    {name: 'JavaScript', id: 1},
    {name: 'Advance Python', id: 2},
    {name: 'HTML && CSS', id: 3},
    {name: 'something different', id: 4}
]

function Content(){

    // the new event will be returned a new element into {} object 
    // so just use destructuring I can get detail on it
    const handleComment = ({detail}) =>{
        console.log(detail)
    }

    const [lessonID, setLessonID] = useState(1)

    useEffect(()=>{
        // this event was custom on index.js => it's fake comments
        // so now I can listen this event on HTML document
        window.addEventListener(`lesson-${lessonID}`,handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessonID}`,handleComment)
        }
    },[lessonID])


    return (
        <div>
            <ul>
                {courses.map(item => (
                    <li key={item.id}
                        onClick={()=>setLessonID(item.id)}
                        style={{color: item.id === lessonID ? 'red' : '#333'}}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content;