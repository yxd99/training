require('es6-promise');

const alwaysThrows = () => {
  throw new Error('OH NOES');
};

const iterate = (number) => {
  console.log(number);
  return ++number;
};

const printErrors = (error) => {
  console.log(error.message);
};

Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(printErrors);
