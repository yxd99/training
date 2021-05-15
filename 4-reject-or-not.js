require('es6-promise');

const promise = new Promise((resolve, reject) => {
  resolve('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

const onReject = (error) => {
  console.log(error.message);
};

promise.then((res) => console.log(res), onReject);
