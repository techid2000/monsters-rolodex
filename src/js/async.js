const myPromise = new Promise((resolve, reject) => {
    if(true) {
        setTimeout(() => {
            resolve('I have succeeded')
        }, 1000)
    } else {
        reject('I have failed')
    }
})

myPromise
    .then(value => value + '!!!!')
    .catch(rejectedValue => new Promise((resolve, reject) => {
        console.log(rejectedValue)
        setTimeout(() => {
            resolve('I tried again and succeeded')
        },1000)
    }))
    .then(value => console.log(value))