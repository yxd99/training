require('es6-promise');

const promiseConstructor = new Promise((resolve, reject) => {
  reject('Ok constructor');
});

const promiseResolve = Promise.resolve('Ok Promise.resolve');

const promiseReject = Promise.reject('Ok Promise.reject');

promiseConstructor.catch((error) => console.log(error));
console.log(promiseResolve, promiseReject);
