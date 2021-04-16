//例4：给定一个正整数数组和k，要求依次取出k个数，要求取出k个数字典序最小 ，输入：nums = [3,5,2,6] ,k = 2 输出：【2，6】
function findSmallSeq(nums,k) {
    let ans = new Array(k)
    let stack =  []
    for(let i = 0;i<nums.length;i++) {
        let left = nums.length - i
        let x = nums[i]
        while(stack.length &&  (stack.length + left > x) && stack[stack.length -1] > x ) {
            stack.pop()
        }
        stack.push(x)
    }
    // 如果递增栈里面的元素太多，那么我们只需要取出前k个就可以了，
    //多余的栈中扔掉
    while(stack.length > k) {
        stack.pop()
    }
    // 把k个元素取出来
    for(let i = 0;i<k;i++){ 
        ans[i] = stack[i]
    }
    return ans
}
console.log(findSmallSeq([3,5,2,6],2))