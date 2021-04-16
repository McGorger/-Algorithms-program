function promiseAll(promises) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(promises)) {
            return reject(new TypeError("argument must be anarray"))
        }
        var countNum = 0;
        var promiseNum = promises.length;
        var resolvedvalue = new Array(promiseNum);
        for (let i = 0; i < promiseNum; i++) {
            Promise.resolve(promises[i]).then(function (value) {
                countNum++;
                resolvedvalue[i] = value;
                if (countNum === promiseNum) {
                    return resolve(resolvedvalue)
                }
            }, function (reason) {
                return reject(reason)
            })
        }
    })
}