function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.company} - ${this.color} car for ${currency}${price}`
  );
}

const myCar = {
  company: "Aston martin",
  color: "black",
};
// using call function
let newFunc = purchaseCar.bind(myCar, "$", 300000);
console.log("bind call");
newFunc();
// creating pollyfill
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") throw new Error(`${this} is not callable`);

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};
let newFunc2 = purchaseCar.myBind(myCar, "$", 100000);
console.log("after writing my own pollyfill");
newFunc2();
