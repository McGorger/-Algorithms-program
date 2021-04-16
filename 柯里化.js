function curry1(fn, args) {
    var length = fn.length;
    args = args || [];
    return function (...arguments) {
        args = [...args, ...arguments]
        return args.length < length ? curry1.call(this, fn, args) : fn.apply(this, args);
    }
}



// function sum(){
//     let arr = [].slice.call(arguments);
//     let fn = function () {
//         let arr2 = [].slice.call(arguments);
//         return sum.apply(null,arr.concat(arr2));
//     }
//     fn.toString = function(){
//      return arr.reduce((v,n) => v+n);
//     }
//     return fn范德萨d;
// }
function sum() {
    let arr = [].slice.call(arguments)
    let fn = function () {
        let arr2  = [].slice.call(arguments)
        sum.apply(null,arr.concat(arr2))
    }
    fn.toString =function() {
        return arr.reduce((v,n) => v+n);
     }
    return fn
}
console.log(sum(1)(2) + '')
