// var addBinary = function(a, b) {
//     debugger
//     let ans = "";
//     let ca = 0;
//     for(let i = Math.max(a.length - 1, j = b.length - 1);i >= 0; i--) {
//         let val = parseInt(a[i]) ? parseInt(a[i]): 0;
//         let val2 = parseInt(b[i]) ? parseInt(b[i]): 0;
//         let total = val + val2 + ca
//         ans +=  total % 2;
//         ca = Math.floor(total / 2);
//     }
//     ans += ca == 1 ? ca : "";
//     return ans.split('').reverse().join('');
// };
// addBinary('11','1')
var merge = function(A, m, B, n) {
        let pa = m,pb = n
        tail =  pa + pb - 1
            let cur
        while(pa>=0||pb >=0) {
             if(pa === -1) {
                cur = B[pb--]
             }else if(pb === -1){
                cur = A[pa--]
             }else if(A[pa] > B[pb]) {
                cur = A[pa--]
             }else{
                cur = B[pb--]
             }
        } 
    A[tail--]= cur
};
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))