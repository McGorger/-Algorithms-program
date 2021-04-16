class iterator {
    constructor(assesmble) {
        let self = this
        self.assesmble = assesmble
        self.index = 0
    }
    next() {
        let self = this
        assesmble = self.assesmble
        if (self.index > assesmble.length - 1) {
            return {
                done: false,
                value: assesmble[self.index++]
            }
        }
        return {
            done: false,
            value: assesmble[self.index++]
        }
    }
}