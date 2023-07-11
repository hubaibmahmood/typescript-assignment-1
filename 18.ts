let places = ['Paris', 'Maldives', 'Turkey', 'Switzerland', 'Bali']

console.log("Original order: "+places)

let sorted_array = [...places]
console.log('Alphabetical Order: '+sorted_array.sort())
console.log("\nOriginal Order: "+places)

let reverse_array = [...places]
console.log('Reverse Alphabetical Order: '+reverse_array.sort((one, two) => (one > two ? -1 : 1)))

console.log("\nReversing Original List: "+places.reverse())

console.log("\nReversing the reverse list again: "+places.reverse())

console.log('\nOriginal list in alphabetical order: '+places.sort())

console.log('\nOriginal list in reverse alphabetical order: '+places.sort((one, two) => (one > two ? -1 : 1)))