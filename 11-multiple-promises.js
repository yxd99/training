require('es6-promise');

const all = (promises = []) => {
  return new Promise((resolve, reject) => {
    let counter = 0;
    let values = [];
    const promisesLength = promises.length;

    for (let i = 0; i < promisesLength; i++) {
      promises[i].then((res) => {
        values[i] = res;
        ++counter;
        if (counter == promisesLength) {
          resolve(values);
        }
      });
    }
  });
};

all([getPromise1(), getPromise2()]).then(console.log);
