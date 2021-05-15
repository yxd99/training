require('es6-promise');

const attachTitle = (name) => {
  return `DR. ${name}`;
};

const promise = Promise.resolve('MANHATTAN');

promise.then(attachTitle).then(console.log);
