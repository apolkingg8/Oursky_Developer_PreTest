
export class Cache {

    key: string = null
    val: any = null
    weight: number = 0
    lastUpdate: number = 0

    get score(): number {
        return this.weight / (Date.now() - this.lastUpdate + 1)
    }

    constructor(props: Partial<Cache>) {
        Object.assign(this, props)
        this.lastUpdate = Date.now()
    }
}

export class CacheStore {

    readonly cacheLimit: number = 3

    caches: Cache[] = []

    get = (key: string)=> {
        return this.caches.find((cache)=> {
            return cache.key === key
        }) || -1
    }

    put = (key: string, val: any, weight: number)=> {
        let newCache = new Cache({
            key: key,
            val: val,
            weight: weight,
        })

        this.caches.push(newCache)

        if(this.caches.length > this.cacheLimit) {
            this.caches.sort((a, b)=> (b.score - a.score))
            this.caches.pop()
        }
    }
}

