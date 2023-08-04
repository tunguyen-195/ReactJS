/// Enhance object literals ##################################################################
var fieldName = "name"
var fieldPrice = "price"

var courses = {
    [fieldName]: "Javascript",
    [fieldPrice]: "1000$"
}

var example = {
    fieldName,
    fieldPrice
}

console.log(courses)
console.log(example)

const infoArr = [
    ['name', 'John'],
    ['age', 30],
    ['gender', 'male']
];

const arrToObj = (arr) => {
    return arr.reduce((obj, [key, value]) => {
        return { ...obj, [key]: value };
    }, {});
};

const infoObj = arrToObj(infoArr);

console.log(infoObj); // Output: {name: 'John', age: 30, gender: 'male'}

/// Destructuring, Rest ##################################################################

courses = {
    name: 'js',
    price: 1000,
    type: 'online',
    level: 'common',
    children: {
        name: 'react'
    }
}

var { name: newname, children: { name }, description = 'default description', ...rest } = courses
console.log(rest) // lấy tất cả phần còn lai của object ra
console.log(newname) // đổi tên để tránh bị ghi đè với name của children
console.log(name) // lấy ra name của children

function logger({ name, b, ...rest }) {
    console.log(name, b, rest) // Đối với object khi lấy ra phải sử dụng đúng key của nó mới lấy được
}

logger(courses)

counter = [1, 2, 3, 9, 4, 5]
logger3 = ([a, b, ...rest]) => console.log(a, b, rest)
logger3(counter)

/// Spread operator ##################################################################
var defaultConfig = {
    name: 'name',
    api: 'http://www.example.com',
    other: 'other'
}

var advancedConfig = {
    ...defaultConfig,
    api:'http://www.another.com'
}

console.log(advancedConfig)