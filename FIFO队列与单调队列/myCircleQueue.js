// index = i 的后一个是 i+1,前一个是i-1
// index = k- 1的后一个就是index = 0
// index = 0的前一个是index = k-1
// 利用取模的技巧统一进行处理：
// index= i的后一个(i+1) % capacity
// index= i的后一个(i-1 + capacity) % capacity
class myCircleQueue {
    constructor(k) {
         this.used = 0
    }
    //将value放到队列中，成功返回true
    enQueue(value) {

    }
    //删除队首元素，成功返回true
    deQueue() {

    }
    // 得到队首元素，如果为空返回-1
    Front() {

    }
    // 得到队尾元素，队列为空返回-1
    Rear() {

    }
    // 队列是否为空
    isEmpty() {

    }
    // 看下一个队列是否已放满k个元素
    isFull() {

    }

}