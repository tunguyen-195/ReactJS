// 1. useEffect(callback) 
// - Gọi callback ngay sau mỗi lần component re-render
// - Gọi callback sau mỗi lần component thêm element vào DOM
// 2. useEffect(callback,[]) 
// - Chỉ gọi callback 1 lần sau khi componet mounted
// 3. useEffect(callback,[deps]) 
// callback sẽ được gọi mỗi khi deps thay đổi

// Common: 
// - callback luôn được gọi ngay sau khi component mounted
// - cleanup function sẽ luôn được gọi ngay trước khi component unmounted
// - cleanup funtion sẽ luôn được gọi trước khi callback được gọi gọi (trừ lần mounted)
// + Cần phải lưu ý các khai niệm mounted/unmounted với re-render/render. Tránh nhầm lẫn 2 khái niệm này

import { useEffect, useState } from "react";

const tabs = ['posts', 'comments', 'photos']


function Content(){

    const [tab,setTab] = useState(tabs[0])
    const [posts, setPosts] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        // using fetch to get api data from jsonplaceholder
        fetch(`https://jsonplaceholder.typicode.com/${tab}`)
            .then(response => response.json())
            .then(posts => setPosts(posts))
    },[tab])

    useEffect(()=>{
        const handleScroll = () => {
            // Check, if scrollY >= 200 will re setup show = true, else show = false
            setShow(window.scrollY >= 200)
        }

        // add a event listener into DOM, when have scroll event, handleScroll function will be called 
        window.addEventListener('scroll', handleScroll, { passive: true })

        //cleanup funtion will be called to remove scroll event, using passive: true parameter to stop call preventDefault()
        return () => {
            window.removeEventListener('scroll',handleScroll, { passive: true })
        }
    },[])


    return (
        <div>
            {tabs.map(item => (
                <button 
                    key = {item}
                    onClick = {() => setTab(item)}
                    style = {tab === item ? 
                        {color: '#fff', 
                        backgroundColor: '#333'
                    }: {}}
                >
                    {item}
                </button>
            ))}
            <div>
                <ul>
                    {posts.map(item => (
                        <li
                            key = {item.id}
                        >{item.title || item.name}</li>
                    ))}
                </ul>
            </div>

            {show&&(<button
            style={{position: 'fixed', 
            right: '50px',
            bottom: '50px'
            }}
            >Go to top
            
            </button>)
            }

        </div>
    )
}

export default Content;