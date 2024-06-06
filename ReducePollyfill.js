let arr = [1, 2, 4];

Array.prototype.myReducer = function (cb, initalValue) {
  let acc = initalValue ? initalValue : this[0];
  let i = initalValue ? 0 : 1;
  for (; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

console.log(arr.myReducer((acc, val) => acc + val, 0));
