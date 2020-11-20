/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.mainStack = [];
  this.reverseStack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.mainStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.mainStack.length) {
    this.reverseStack.push(this.mainStack.pop());
  }

  const x = this.reverseStack.pop();

  while (this.reverseStack.length) {
    this.mainStack.push(this.reverseStack.pop());
  }

  return x;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.mainStack.length) {
    this.reverseStack.push(this.mainStack.pop());
  }

  const x = this.reverseStack.pop();
  this.reverseStack.push(x);

  while (this.reverseStack.length) {
    this.mainStack.push(this.reverseStack.pop());
  }

  return x;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.mainStack.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
