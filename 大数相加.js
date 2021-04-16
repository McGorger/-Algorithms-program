let a = "9007199254740991";
let b = "1234567899999999999";

function add(a, b) {
    //取两个数字的最大长度
    let maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, 0)
    b = b.padStart(maxLength, 0)
    let val = 0,
        t = 0
    for (let i = maxLength - 1; i >= 0; i--) {
        val = a[i] + b[i] + t
        t = Math.floor(val / 10)
        sum = val % 10 + sum
    }
    if (f == 1) {
        sum = "1" + sum;
    }
    return sum;

}