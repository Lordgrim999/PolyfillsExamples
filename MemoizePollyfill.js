// memoize takes the function to memoize as argument and returns a new function
function memoize(fn, context) {
  //todo: add safe check
  const cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = fn.call(context || this, ...args);
    }
    return cache[key];
  };
}
const multiply = (num1, num2) => {
  for (let i = 1; i < 1000000; i++) {}
  return num1 * num2;
};
const memoizeMultiply = memoize(multiply);
console.time("First call");
console.log(memoizeMultiply(2, 4));
console.timeEnd("First call");
console.time("second call");
console.log(memoizeMultiply(2, 4));
console.timeEnd("second call");
