Array.prototype.findDup = function(count) {
    return this.reduce((re, val) => {
        let index = re.findIndex(o => o.val === val)
        if (index >= 0) {
            re[index].count++
        } else {
            re.push({ count: 1, val })
        }
        return re
    }, []).filter(o => o.count >= count).map(o => o.val)
}