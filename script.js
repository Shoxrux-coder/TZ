
let user = {
    name: 'Shoxrux',
    sname: 'Amanov',
    age: 18
}

let user2  = {
    isMarried:false,
    pubgId: 5714098338,
    school: 55,
    hairColor: 'black'
}
//1.Соеденить два объекта в один
let newObj = Object.assign(user, user2)
console.log(newObj);

//2.Получить все ключи в один массив и все значения тоже в один отдельный массив
let keys = [Object.keys(newObj)]
let values = [Object.values(newObj)]
console.log(keys,values);

//3.Соеденить два массива в один
let arr_name = ['Shoxrux']
let arr_sname = ['Amanov']
let arr_age = [18]
let arr_isMarried = [false]
let newArray = arr_name.concat(arr_sname, arr_age, arr_isMarried)
console.log(newArray);

//4.Отфильтровать массив по типам данных элементов
let str = []
let num = []
let bool = []
newArray.filter(item => {
    if (typeof(item) === 'string'){
        str.push(item)
    } else if(typeof(item) === 'number'){
        num.push(item)
    } else if (typeof(item) === 'boolean'){
        bool.push(item)
    }
})
console.log(str,num,bool);