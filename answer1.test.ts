import isSubset from "./answer1";

describe("answer1", ()=> {

    // the time complex should be O(n)

    test("isSubset()", async ()=> {
        expect(isSubset([], [])).toEqual(false)
        expect(isSubset([1, 2, 3], [])).toEqual(false)
        expect(isSubset([], [1, 2, 2])).toEqual(false)

        expect(isSubset([1, 2, 3], [2, 3])).toEqual(true)
        expect(isSubset([2, 3], [1, 2, 3])).toEqual(true)
        expect(isSubset([2, 3], [3, 4])).toEqual(false)

        expect(isSubset([1, `2`, 3], [2, 3])).toEqual(false)
        expect(isSubset([2, 3], [1, `2`, 3])).toEqual(false)
    })

    test("isSubset() bad input", async ()=> {
        expect(isSubset([], null)).toEqual(false)
        expect(isSubset(null, [])).toEqual(false)
        expect(isSubset(null, null)).toEqual(false)
    })

})
