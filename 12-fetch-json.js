require('es6-promise');
const qio = require('q-io/http');

const result = qio.read('http://localhost:1337');

result.then((value) => console.log(JSON.parse(value)));
