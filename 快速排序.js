function quicksort(arr){
    if(arr.length < 2){
        return arr
    } else {
        const pivot = arr[0]
        const pivotArr = []
        const lowArr = []
        const hightArr = []
        arr.forEach(cur => {
            if(current === pivot) pivotArr.push(cur)
            else if(current > pivot) hightArr.push(cur)
            else lowArr.push(cur)
        });
        return quicksort(lowArr).concat(pivot).concat(quicksort(hightArr))
    }
}