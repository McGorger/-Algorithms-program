var entry = {
    'a.b.c.dd': 'abcdd',
    'a.d.xx':'adxx',
    'a.e': 'ae'
}
//  思路 
const changeObj = (input) => {
    const keys = Object.keys(input)
    const resObj = {}
    for(const key of keys){
        const everyKey = key.split('.');
        everyKey.reduce((prev,next,index,array) =>{
            if(index === array.length - 1){
                prev[next] = input[key]
                return
            }
            prev[next] = prev[next] || {}
            return prev[next]
        },resObj)
    }
    return resObj
}
let obj = changeObj(entry)

function flatObj(obj,parentKey = '',result = {}) {
    for(const key in obj) {
        if(obj.hasOwnProperty(key)){
            let keyName = `${parentKey}${key}`
            if(typeof obj[key] === 'object') {
                flatObj(obj[key],keyName+'.',result)
            }else{
                result[keyName] = obj[key]
            }
        }
    }
    return result
}

// function flatObj(entry) {
//     const queue = Object.entries(entry)
//     const res = {}
//     while(queue.length) {
//         const  [key,obj] = queue.pop()
//         for(const [k,v] of Object.entries(obj)) {
//             if(typeof v !== 'object'){
//                 res[`${key}.${k}`] = v
//             }else {
//                 queue.push([`${key}.${k}`,v])
//             }
//         }
//     }
//     return res
// }
console.log(flatObj({a:'a'}))