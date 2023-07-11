const countries = ['USA', 'UK', 'Japan', 'Pakistan', 'China']

//equality and inequality
console.log(countries[0] == 'USA')
console.log(countries[1] != 'UK')

console.log("\n")
console.log(countries[0].toLowerCase() == 'usa')
console.log(countries[0].toLowerCase() == 'uk')

console.log("\n")
console.log(countries.length == 5)
console.log(countries.length != 6)
console.log(countries.length >= 7)
console.log(countries.length > 3)
console.log(countries.length < 3)
console.log(countries.length <= 3)

console.log("\n")
console.log(countries.length > 4 && countries.length < 6)
console.log(countries.length > 8 || countries.length < 6)

console.log("\n")
console.log(countries.indexOf('USA') != -1)
console.log(countries.indexOf('Switzerland') == -1)