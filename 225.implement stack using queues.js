const { ThumbUpSharp } = require("@material-ui/icons");

var MyStack = function () {
  this.queue1 = [];
  this.queue2 = [];
};

MyStack.prototype.push = function (x) {
  this.queue1.push(x);
};

MyStack.prototype.pop = function () {
  if (!this.queue1.length) {
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
  }
  while (this.queue1.length > 1) {
    this.queueu2.push(this.queue1.shift());
  }
  return this.queue1.shift();
};

MyStack.prototype.top = function () {
  const x = this.pop(); // ?
  this.queue1.push(x);
  return x; // ?
};

MyStack.prototype.empty = function () {
  return !this.queue1.length && !this.queue2.length;
};
