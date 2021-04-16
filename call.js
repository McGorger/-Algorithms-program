Function.prototype.call = function (content,...params) {
    let self = this
    key = Symbol('key')
    content[key] = self
    let res  = content[key](...params)
    delete content[key]
    return res
}