let productSign = (num1,num2,num3) => {
    let product = num1 * num2 * num3
    let sign = "+"
    if(product < 0){
        sign = "-"
    }
    return "The sign is "+sign
}

let test = productSign(2,45,-9)
console.log(test)