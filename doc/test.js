courses = {
    name: 'js',
    price: 1000,
    type: 'online',
    level: 'common',
    children:{
        name: 'react'
    }
}

var {name: newname,children:{name},description = 'default description', ...rest} = courses
console.log(rest) // lấy tất cả phần còn lai của object ra
console.log(newname) // đổi tên để tránh bị ghi đè với name của children
console.log(name) // lấy ra name của children

function logger({name,b, ...rest}){
    console.log(name,b,rest) // Đối với object khi lấy ra phải sử dụng đúng key của nó mới lấy được
}

logger(courses)

counter = [1,2,3,9,4,5]
logger3 = ([a,b, ...rest]) => console.log(a,b,rest)
logger3(counter)