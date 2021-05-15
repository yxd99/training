require('es6-promise');
const { resolve } = require('q-io/fs');
const qio = require('q-io/http');

const cache = qio.read('http://localhost:7000');

cache
  .then((id) => {
    return qio.read(`http://localhost:7001/${id}`);
  })
  .then((json) => console.log(JSON.parse(json)))
  .catch(console.log)
  .done();
