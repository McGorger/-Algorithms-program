function new_instance_of(leftVaule, rightVaule) { 
    let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
    leftVaule =  Object.getPrototypeOf(obj); // 取左表达式的__proto__值
    while (leftVaule) {
        if (leftVaule === rightProto) return true;	
        leftVaule = Object.getPrototypeOf(leftVaule)
    }
    return false
}
