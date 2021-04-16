function isVaild(size,position) {
    if(size.length === 0) return  0
    let stack = []
    const left = 0
    const right = 1
    for(let i = 0;i<size.length;i++) {
        let cursize = size[i]
        let curposition = position[i]
        let isflag = false //是否被吃掉
        while(stack.length != 0 && position[stack[stack.length - 1]] === right && curposition === left) { //🐟相对了
            if(cursize < size[stack[stack.length - 1]]) {
                isflag = true
                break
            }
            stack.pop()
        }
        if(!isflag) {
            stack.push(i)
        }
    }
    return stack.length;
}
console.log(isVaild([3,4,1,2],[0,1,0,0]))