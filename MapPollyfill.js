//original map
let arr = [1, 2, 4];
// takes 3 args curr val, index, array
const result = arr.map((curr, index, arr) => {
  return curr * 3;
});

Array.prototype.myMap = function (cb) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(cb(this[i], i, this));
  }
  return output;
};
const result2 = arr.myMap((curr, index, arr) => {
  return curr * 3;
});
console.log(result);
console.log(result2);
