const arr = ['1', '2', , '哎呀', ['拍平数组', '拍平字符串', ['爱哎', '啊实打实'], 1231], 'DASD']

function flat(arr) {
    let arrRes = []
    arr.forEach(item => {
        if (Array.isArray(item)) {
            arrRes = arrRes.concat(arguments.callee(item))
        } else {
            arrRes.push(item)
        }
    });
    return arrRes
}

function flat(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
    }, [])
}

function flat(arr) {
    const result = [] 
    const stack = [].concat(arr)
    while (stack.length != 0) {
        var node = stack.pop()
        if (Array.isArray(node)) {
            stack.push(...node)
        } else {
            result.unshift(node)
        }
    }
    return result
}


function flat(arr, num = 1) {
    return num > 0 ?
        arr.reduce(
            (pre, cur) =>
            pre.concat(Array.isArray(cur) ? flat(cur, num - 1) : cur), []
        ) :
        arr.slice();
}

flat(arr, Infinity);



function* flat(arr, num) {
    if (num === undefined) num = 1;
    for (const item of arr) {
        if (Array.isArray(item) && num > 0) { // num > 0
            yield* flat(item, num - 1);
        } else {
            yield item;
        }
    }
}