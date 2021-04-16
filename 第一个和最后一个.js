var searchRange = function(nums, target) {
    let left = 0, right = nums.length -1
    let start = -1, end = -1
    while(left <= right) {
        if(nums[left] < target) left++
        // 找到第一个出现的位置，赋值给start
        if(nums[left] === target && start === -1) start = left++
        if(nums[right] > target) right-- 
        // 找到最后一个出现的位置，赋值给end
        if(nums[right] === target && end === -1) end = right--
        if(start > -1 && end > -1) break
    }
    return [start, end]
  };
