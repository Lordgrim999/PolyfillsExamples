let arr = [1, 2, 4];

Array.prototype.myFilter = function (cb) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) output.push(this[i]);
  }
  return output;
};

console.log(arr.myFilter(val => val % 2 == 0));
