
const foo = (n: number, cur: number)=> {

    if(n < 2) {
        throw `Invalid input`
    }

    cur = cur || 0

    for(;n>2;n-=1) {
        cur = cur + 1 / (n * (n -1))
    }

    return 1 / n + cur
}

export default foo
