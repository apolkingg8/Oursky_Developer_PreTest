import foo from "./answer3";

describe("answer3", ()=> {

    function recur(n, cur) {

        if (!cur) {
            cur = 0;
        }

        if (n < 2) {
            throw new Error('Invalid input');
        }

        if (n === 2) {
            return 1 / n + cur;
        }

        return recur(n - 1, cur + 1 / (n * (n -1)));
    }

    test("foo()", ()=> {
        expect(foo(7, 2)).toEqual(recur(7, 2))
        expect(foo(3, 4)).toEqual(recur(3, 4))
        expect(foo(10, 10)).toEqual(recur(10, 10))
        expect(foo(20, 11)).toEqual(recur(20, 11))
        expect(foo(5, 7)).toEqual(recur(5, 7))
    })

    test("foo() bad input", ()=> {
        expect(()=> {foo(1, 2)}).toThrow('Invalid input')
    })
})
