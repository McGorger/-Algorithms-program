var isPalindrome = function(s) {
 var str =s.toLocaleLowerCase().match(/[A-Za-z0-9]+/g);
 if(!str) return true
 str = str.join("")
 var left = 0 ,right = str.length -1
 while(left < right) {
     if(str[left] === str[right]){
         left ++
         right --
     }else{
        return false
     }
 }
 return true
};