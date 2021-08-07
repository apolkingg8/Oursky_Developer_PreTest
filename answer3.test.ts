import foo from "./answer3";

describe("answer3", ()=> {

    test("foo()", ()=> {
        expect(foo(10, 10)).toEqual(10.9)
        expect(foo(10, 11)).toEqual(11.9)
        expect(foo(10, 12)).toEqual(12.9)
        expect(foo(10, 13)).toEqual(13.9)
        expect(foo(5, 10)).toEqual(10.8)
        expect(foo(5, 11)).toEqual(11.8)
        expect(foo(5, 12)).toEqual(12.8)
        expect(foo(5, 13)).toEqual(13.8)
    })

})
