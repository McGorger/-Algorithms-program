// index = i 的后一个是 i+1,前一个是i-1
// index = k- 1的后一个就是index = 0
// index = 0的前一个是index = k-1
// 利用取模的技巧统一进行处理：
// index= i的后一个(i+1) % capacity
// index= i的后一个(i-1 + capacity) % capacity
class myCircleQueue {
    constructor(k) {
        this.used = 0 //已经使用的元素个数
        this.front = 0 // 第一个元素所在位置
        this.rear = 0 // rear 是enQueue可以存放的位置
        // 循环队列最多可以存放的元素个数
        this.capacity = k;
        // 循环队列的存储空间
        this.a = new Array(this.capacity);
    }
    //将value放到队列中，成功返回true
    enQueue(value) {
        if (this.isFull()) {
            return false;
        }
        // 如果没有放满，那么a[rear]用来存放新进来的元素
        this.a[this.rear] = value;
        // rear注意取模
        this.rear = (this.rear + 1) % this.capacity;
        // 已经使用的空间
        this.used++;
        // 存放成功!
        return true;
    }
    //删除队首元素，成功返回true
    deQueue() {
        if (this.isEmpty()) {
            return false;
        }
        // 第一个元素取出
        let ret = this.a[this.front];
        // 注意取模
        this.front = (this.front + 1) % this.capacity;
        // 已经存放的元素减减
        this.used--;
        // 取出元素成功
        return true;
    }
    // 得到队首元素，如果为空返回-1
    Front() {
        if (this.isEmpty()) {
            return -1;
        }
        // 取出队首元素
        return this.a[this.front];
    }
    // 得到队尾元素，队列为空返回-1
    Rear() {
        if (this.isEmpty()) {
            return -1;
        }
        // 注意：这里不能使用rear - 1
        // 需要取模
        let tail = (rear - 1 + capacity) % capacity;
        return this.a[tail];
    }
    // 队列是否为空
    isEmpty() {
        return this.used == 0;
    }
    // 看下一个队列是否已放满k个元素
    isFull() {
        return this.used == this.capacity;
    }

}
// font == rear
// (rear+1)% capacity == front
class myCircleQueue {}
console.log( new myCircleQueue(2).enQueue(22))