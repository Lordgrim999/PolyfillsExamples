function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("like video" + video), 1000);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("share video" + video), 2000);
  });
}

function downloadTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("download video" + video), 3000);
  });
}

Promise.allPollyfill = function (promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    if (!promises.length) {
      resolve(result);
      return;
    }
    let pending = promises.length;
    promises.forEach((promise, idx) => {
      promise
        .then(res => {
          result[idx] = res;
          pending--;
          if (pending == 0) {
            resolve(result);
            return;
          }
        })
        .catch(err => {
          reject(err);
          return;
        });
    });
  });
};

Promise.allPollyfill([
  likeTheVideo("hi"),
  shareTheVideo("bye"),
  downloadTheVideo("thy"),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
