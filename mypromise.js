const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'resolve'
class myPromiss {
    constructor(exector) {
        exector(this.resolve,this.reject)
    }
    status = PENDING
    value = undefined
    reason = undefined
    succeessCallBack = undefined
    failCallBack = undefined
    resolve = (value) => {
        if(this.status != PENDING) return
        this.status = FULFILLED
        this.value = value 
        this.succeessCallBack && this.succeessCallBack(this.value)
    }
    reject = (value) => {
        if(this.status != PENDING) return
        this.status = REJECTED
        this.reason  = value
        this.failCallBack && this.failCallBack(this.reason)
    }
    then = (succeessCallBack,failCallBack) => {
        if (this.status === FULFILLED) {
            succeessCallBack(this.value)
        } else if (this.status === REJECTED) {
            failCallBack(this.reason)
        } else {
            this.succeessCallBack =  succeessCallBack
            this.failCallBack = failCallBack
        }
    }
    
}