Array.prototype.myreduce = function(func, prev) {
    let i = 0;
    !prev && (prev = this[0], i++)
    for (i; i < this.length; i++) {
        prev = func(prev, this[i], i, this);
    }
    return prev
}
console.log([1, 2, 3, 4].myreduce((val, val2) => {
    return val + val2
}, 1))