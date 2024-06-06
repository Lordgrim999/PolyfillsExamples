const myDebounce = function (callback, delay) {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime;
    if (now - last < delay) return;
    last = now;
    return callback(...args);
  };
};
let counter = 0;

const result = myDebounce(() => {
  counter++;
  console.log(counter);
}, 80);
for (let i = 0; i < 10; i++) {
  setTimeout(() => result(), 1000);
}
