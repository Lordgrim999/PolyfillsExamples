const myDebounce = function (callback, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
let counter = 0;

const result = myDebounce(() => {
  counter++;
  console.log(counter);
}, 800);
for (let i = 0; i < 1000000; i++) {
  result();
}
// generte p