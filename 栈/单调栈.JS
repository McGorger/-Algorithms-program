// 例如：找出数组右面比我小的元素，输入：【5，2】，输出：【1，-1】
function findRightSmall(arr) {
    let ans = new Array(arr.length)
    let stack = []
    for(let i = 0;i<arr.length;i++) {
        let x = arr[i]
        while(stack.length && arr[stack[stack.length - 1]] > x) {
            ans[stack[stack.length - 1]] = i
            stack.pop()
        }
      stack.push(i)
    }
    while(stack.length) {
        ans[stack[stack.length - 1]] = -1
        stack.pop()
    }
    return ans
}