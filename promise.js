function limitload(urls, handler, limit) {
    const sequence = [].concat(urls)
    let promise = []
    promise = sequence.splice(0, limit).map((url, index) => {
        return handler(url).then(() => {
            return index
        })
    })
    let p = Promise.race(promise);
    for (let i = 0; i < sequence.length; i++) {
        p = p.then((res) => {
            promise[res] = handler(sequence[i]).then(() => {
                return index
            })
            return Promise.race(promise)
        })
    }
}

function loadimg(url) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('OK')
            res()
        }, url.time);
    })
}
limitload(urls, loadimg, 3)