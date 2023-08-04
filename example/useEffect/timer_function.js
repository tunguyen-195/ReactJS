import { useEffect, useState } from "react";


function Content(){
    const [coutDown, setCountDown] = useState(180)

    useEffect(() =>{
        const interID = setInterval(() =>{
            setCountDown(pre => pre - 1)
        },1000)

        return () => {
            clearInterval(interID)
        }
    }
    ,[])

    // Có thể chọn dùng 1 trong 2 cách để làm ứng dụng dếm ngược theo thời gian
    
    // useEffect(()=>{
    //     const timeoutID = setTimeout(()=>{
    //         setCountDown(coutDown - 1)
    //     },1000)

    //     return ()=>{
    //         clearTimeout(timeoutID)
    //     }
    // },[coutDown])

    return (
        <div>
            <h1>{coutDown}</h1>
        </div>
    )
}

export default Content;