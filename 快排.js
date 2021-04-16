function quickSort(arr) {
    // 停止条件
    if (arr.length <= 1) return arr;
    // 确定锚点元素
    const index = parseInt(arr.length / 2);
    const flagValue = arr[index];
    const leftArr = [];
    const rightArr = [];
    // 获取左右子集合
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (i === index) continue;
      if (item <= flagValue) leftArr.push(item);
      else rightArr.push(item);
    }
    // 递归查询子集合
    return [...quickSort(leftArr), flagValue, ...quickSort(rightArr)];
  }