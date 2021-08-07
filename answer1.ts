
const isSubset = (arr1: string[], arr2: string[]): boolean => {
    try {
        const hash1: string = arr1.join(``)
        const hash2: string = arr2.join(``)

        // empty is not subset
        if (hash1.length === 0 || hash2.length === 0) {
            return false
        }

        return hash1.indexOf(hash2) > -1
            || hash2.indexOf(hash1) > -1
    } catch (err) {
        console.error(err)
        return false
    }
}

export default isSubset
