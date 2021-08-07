import isSubset from "./answer1";

describe("answer1", ()=> {

    // the time complex is O(n)

    test("isSubset()", async ()=> {
        expect(isSubset([], [])).toEqual(false)
        expect(isSubset([`A`, `B`, `C`], [])).toEqual(false)
        expect(isSubset([], [`A`, `B`, `C`])).toEqual(false)

        expect(isSubset([`A`, `B`, `C`], [`B`, `C`])).toEqual(true)
        expect(isSubset([`B`, `C`], [`A`, `B`, `C`])).toEqual(true)
        expect(isSubset([`B`, `C`], [`C`, `D`])).toEqual(false)
    })

    test("isSubset() bad input", async ()=> {
        expect(isSubset([], null)).toEqual(false)
        expect(isSubset(null, [])).toEqual(false)
        expect(isSubset(null, null)).toEqual(false)
    })

})
