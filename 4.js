function isURL(url) {
    let regex = /^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?([a-zA-Z0-9_\-\?\=\&\%\.\/]*)$/;
    console.log(url)
    return regex.test(url)
}
  
let result = isURL("www.shuvarnna.com")
console.log(result)