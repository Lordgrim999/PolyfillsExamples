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
purchaseCar.call(myCar, "$", 1000000);
console.log("after writing my own pollyfill");
// creating pollyfill
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") throw new Error(`${this} is not callable`);
  context.fn = this;
  context.fn(...args);
};
purchaseCar.myCall(myCar, "$", 200000);
