require('es6-promise');

const parsePromised = (json) => {
  return new Promise((resolve, reject) => {
    try {
      const jsonParse = JSON.parse(json);
      resolve(jsonParse);
    } catch (error) {
      reject(error.message);
    }
  });
};

parsePromised(process.argv[2]).then(console.log).catch(console.log);
