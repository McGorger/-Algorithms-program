//  input :nums = [1,3,-1,-3,5,3],k = 3 ,output = [3,3,5,5]
var maxSlidingWindow = function(nums, k) {
    let Q = [];
    let ans = [];
    function push(val) {
        while (Q.length && Q[Q.length - 1] < val) {
            Q.pop();
        }
        // 将元素入队
        Q.push(val);
    }
    function pop(val) {
        while (Q.length && Q[0] === val) {
            Q.shift();
        }
    }
    for (let i = 0; i < nums.length; i++) {
        push(nums[i]);
        // 如果队列中的元素还少于k个
        // 那么这个时候，还不能去取最大值
        if (i < k - 1) {
            continue;
        }
        // 队首元素就是最大值
        ans.push(Q[0]);
        // 尝试去移除元素
        pop(nums[i - k + 1]);
    }
    return ans
};
console.log(maxSlidingWindow([1,3,1,2,0,5],3))
