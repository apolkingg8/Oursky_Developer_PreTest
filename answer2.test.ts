import {Cache, CacheStore} from "./answer2";

describe("answer2", ()=> {

    // time complex is O(n)

    test("put()", ()=> {
        let cacheStore = new CacheStore()
        let cache1 = new Cache({key: `c1`, val: `c1`, weight: 100})
        let cache2 = new Cache({key: `c2`, val: `c2`, weight: 200})
        let cache3 = new Cache({key: `c3`, val: `c3`, weight: 300})
        let cache4 = new Cache({key: `c4`, val: `c4`, weight: 400})
        let cache5 = new Cache({key: `c5`, val: `c5`, weight: 500})

        expect(cacheStore.caches.length).toEqual(0)

        cacheStore.put(cache1.key, cache1.val, cache1.weight)
        cacheStore.put(cache2.key, cache2.val, cache2.weight)
        cacheStore.put(cache3.key, cache3.val, cache3.weight)

        expect(cacheStore.caches.length).toEqual(3)

        cacheStore.put(cache4.key, cache4.val, cache4.weight)
        cacheStore.put(cache5.key, cache5.val, cache5.weight)

        expect(cacheStore.caches.length).toEqual(3)
        expect(cacheStore.caches.map((cache)=> (cache.key))).toMatchObject([cache5.key, cache4.key, cache3.key])
    })

    test("get()", ()=> {
        let cacheStore = new CacheStore()
        let cache1 = new Cache({key: `c1`, val: `c1`, weight: 100})
        let cache2 = new Cache({key: `c2`, val: `c2`, weight: 200})
        let cache3 = new Cache({key: `c3`, val: `c3`, weight: 300})
        let cache4 = new Cache({key: `c4`, val: `c4`, weight: 400})
        let cache5 = new Cache({key: `c5`, val: `c5`, weight: 500})

        cacheStore.put(cache1.key, cache1.val, cache1.weight)
        cacheStore.put(cache2.key, cache2.val, cache2.weight)
        cacheStore.put(cache3.key, cache3.val, cache3.weight)

        expect((cacheStore.get(cache1.key) as Cache).key).toEqual(cache1.key)
        expect((cacheStore.get(cache2.key) as Cache).key).toEqual(cache2.key)
        expect((cacheStore.get(cache3.key) as Cache).key).toEqual(cache3.key)
        expect(cacheStore.get(cache4.key) as number).toEqual(-1)
        expect(cacheStore.get(cache5.key) as number).toEqual(-1)

        cacheStore.put(cache4.key, cache4.val, cache4.weight)
        cacheStore.put(cache5.key, cache5.val, cache5.weight)

        expect(cacheStore.get(cache1.key) as number).toEqual(-1)
        expect(cacheStore.get(cache2.key) as number).toEqual(-1)
        expect((cacheStore.get(cache3.key) as Cache).key).toEqual(cache3.key)
        expect((cacheStore.get(cache4.key) as Cache).key).toEqual(cache4.key)
        expect((cacheStore.get(cache5.key) as Cache).key).toEqual(cache5.key)
    })

})
