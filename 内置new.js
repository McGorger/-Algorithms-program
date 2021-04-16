function _news(Ctor,...params) {
 // 1. 创建Ctor的实例对象
 let obj,res,proto = Ctor.prototype
 if(typeof Ctor !=='function'|| !proto) throw new TypeError('ctor is not a construction')
 obj = Object.create(Ctor)
 obj.__proto__  = Ctor.prototype;
 let res = Ctor.call(obj,...params)
 if(res != null && /^(object|function)$/.test(typeof res)) return res
 return obj
}
Object.create = function(prototype) {
 function Proxy() {}
 Proxy.prototype = prototype
 return new Proxy
}