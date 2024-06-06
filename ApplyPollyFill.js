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
purchaseCar.apply(myCar, ["$", 1000000]);
console.log("after writing my own pollyfill");
// creating pollyfill
Function.prototype.myApply = function (context, args = []) {
  if (typeof this !== "function") throw new Error(`${this} is not callable`);
  if (!Array.isArray(args))
    throw new Error("CreateListFromArrayLike called on non-object");
  context.fn = this;
  context.fn(...args);
};
purchaseCar.myApply(myCar, ["$", 200000]);
