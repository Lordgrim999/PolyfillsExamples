function myPromise(executor) {
  let onResolve,
    onReject,
    isFulfilled = false,
    isRejected = false,
    isCalled = false,
    value;
  this.then = function (callback) {
    onResolve = callback;
    if (isFulfilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };
  function resolve(val) {
    value = val;
    isFulfilled = true;
    if (typeof onResolve === "function") {
      isCalled = true;
      onResolve(val);
    }
  }

  function reject(error) {
    value = error;
    isRejected = true;
    if (typeof onReject === "function") {
      isCalled = true;
      onReject(error);
    }
  }

  this.catch = function (callback) {
    onReject = callback;
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

let samplePromise = new myPromise((resolve, reject) => {
  reject(2);
});

samplePromise
  .then(res => console.log(res))
  .catch(err => console.error("some error occured", err));
