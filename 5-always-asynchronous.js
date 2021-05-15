require('es6-promise')

const promise = new Promise((resolve, reject) => {
    resolve('PROMISE VALUE')
})

promise.then(res => console.log(res))

console.log('MAIN PROGRAM')