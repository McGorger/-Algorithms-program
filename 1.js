//[蚂蚁]
function getFrequentTag() {
    let res = []
    const maxBy = (list, keyBy) => {
        list.reduce((prev,next)=>{
            if(keyBy(prev) < keyBy(next)) {
               res = [next]
               return next 
            }else if(keyBy(prev) == keyBy(next)) {
                res.includes(prev) ? res.push(next) : res.push(prev,next)
                return next
            } else {
                return prev
            }
        })
        return res
    }
    const tags = [...document.querySelectorAll('*')].map(x => x.tagName).reduce((o, tag) => {
        o[tag] = o[tag] ? o[tag] + 1: 1;
        return o
    },{})

    return maxBy(Object.entries(tags),tag => tag[1])
}