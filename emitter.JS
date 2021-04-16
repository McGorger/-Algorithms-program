class EventEmitter {
    constructor() {
        this.events = {}
    }
    emit(event, ...args) {
        const cbs = this.events[event]
        if (!cbs) {
            console.log(`mei yt`)
            return this
        }
        cbs.forEach(element => {
            element.apply(this, args)
        });
        return this
    }
    on(event, cb) {
           if (!this.event[event]) {
            this.event[event] = []
        }
        this.event[event].push(cb)
    }
    once(event, cb) {
       const func = (...args) => {
            this.off(event, func)
            cb.apply(this, args)
        }
        this.on(event, func)
    }
    off(event, cb) {
        if (!cb) {
            this.events[event] = null
        } else {
            this.events[event] = this.events[event].fifter(item => item !== event)
        }
        return this
    }
}