let obj = {
    name: '严家辉',
    age: 18
}
let obj2 = {
    age: 18,
    name: '严家辉'
}
const isSame = (obj1,obj2) => {
    let obj1keys =Object.keys(obj1)
    let obj2keys = Object.keys(obj2)
    if(obj1keys.length !== obj2keys.length) return false
    for(let i = 0;i<obj1keys.length;i++) {
        let key = obj1keys[i]
        if(!obj1keys.includes(key)) return false
        if(!obj2keys.includes(key)) return false 
    }
    return true
}
