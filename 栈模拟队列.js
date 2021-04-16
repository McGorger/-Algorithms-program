var MyQueue = function() {
    this.leftstack = []
    this.rightstack = []
 };
 
 MyQueue.prototype.push = function(x) {
    this.leftstack.push(x)
 };

 MyQueue.prototype.pop = function() {
     if(!this.rightstack.length) {
         while(this.leftstack.length) {
             this.rightstack.push(this.leftstack.pop())
         }
     }
     return this.rightstack.pop()
 };
 
 MyQueue.prototype.peek = function() {
     if(!this.rightstack.length) {
         while(this.leftstack.length) {
             this.rightstack.push(this.leftstack.pop())
         }
     }
     return this.rightstack[this.rightstack.length - 1]
    
 };
 
 MyQueue.prototype.empty = function() {
      return this.leftstack.length === 0 && this.rightstack.length === 0
 };
 