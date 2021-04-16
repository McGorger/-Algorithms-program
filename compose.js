function compose(...args) {
    return function (value) {
        return args.reduce(function (acc,fn) {
            return fn(acc)
        }, value)
    }
}
