let isUpper_Case = (string) => {
    let regex = /^[A-Z]/
    return regex.test(string)
}

let result = isUpper_Case("hari Govind")
console.log(result)