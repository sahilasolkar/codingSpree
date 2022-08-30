let t = 'helLo'

const camelCase = (s) => {
    let a = 1
    for (let i = 0; i < s.length; i++) {
        let temp = (s.charAt(i)).toUpperCase()
        if (s.charAt(i) == temp) {
            a += 1
        }
    }
    return a
}

console.log(camelCase('saveChangesInTheEditor'));



