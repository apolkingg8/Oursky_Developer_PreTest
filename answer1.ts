
const isSubset = (arr1: any[], arr2: any[]): boolean => {
    try {
        let hash1: string = arr1.join(``)
        let hash2: string = arr2.join(``)

        // empty is not subset
        if (hash1.length === 0 || hash2.length === 0) {
            return false
        }

        let hashIndex1 = hash1.indexOf(hash2)
        let hashIndex2 = hash2.indexOf(hash1)

        if(hashIndex1 > -1) {
            for(let i=hashIndex1; i<arr1.length; i++) {
                let i2 = i - hashIndex1

                if(arr1[i] !== arr2[i2]) {
                    return false
                }
            }

            return true
        }

        if(hashIndex2 > -1) {
            for(let i=hashIndex2; i<arr2.length; i++) {
                let i1 = i - hashIndex2

                if(arr1[i1] !== arr2[i]) {
                    return false
                }
            }

            return true
        }

        return false
    } catch (err) {
        console.error(err)
        return false
    }
}

export default isSubset
