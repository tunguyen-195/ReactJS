import { useEffect, useState } from "react";


function Content(){

    const [avatar, setAvatar] = useState()

    useEffect(() =>{

        return () =>{
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }
    ,[avatar])

    const handleAvatar = e => {
        const file = e.target.files[0] // Nó sẽ trả về cho mình 1 object
        // Nên mình sẽ tự thêm 1 property vào object đó
        file.preview = URL.createObjectURL(file)
        setAvatar(file)

        // Sử dụng cú pháp dưới đây nếu muốn chọn liên tiếp 2 ảnh giống nhau (là 1 ảnh)
        // Vì khi dọn dẹp giá trị ảnh cũ giống với ảnh sắp chọn
        // thì ảnh mới có thẻ lọt vào sự kiện onChange được
        e.target.value = null
    }

    return (
        <div>
            <div>
                <input type="file"
                onChange={handleAvatar}
                />
            </div>
            <div>
                {//Have avatar yet?
                }
                {avatar && <img src={avatar.preview} width = "80%" alt = "something"></img>}
            </div>
        </div>
    )
}

export default Content;