function isVaild(s) {
    if(!s) return true
    if(s.length % 2 === 0) return true
    let leftBraceNumber = 0
    for(let i = 0;i < s.length;i++) {
        let char = s[i]
        if(char == '(') {
            leftBraceNumber++
        }else if(char == ')') {
            if(leftBraceNumber <= 0){
                return false
            }
            --leftBraceNumber
        }
    } 
    return leftBraceNumber == 0
}