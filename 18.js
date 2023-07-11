var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ['Paris', 'Maldives', 'Turkey', 'Switzerland', 'Bali'];
console.log("Original order: " + places);
var sorted_array = __spreadArray([], places, true);
console.log('Alphabetical Order: ' + sorted_array.sort());
console.log("\nOriginal Order: " + places);
var reverse_array = __spreadArray([], places, true);
console.log('Reverse Alphabetical Order: ' + reverse_array.sort(function (one, two) { return (one > two ? -1 : 1); }));
console.log("\nReversing Original List: " + places.reverse());
console.log("\nReversing the reverse list again: " + places.reverse());
console.log('\nOriginal list in alphabetical order: ' + places.sort());
console.log('\nOriginal list in reverse alphabetical order: ' + places.sort(function (one, two) { return (one > two ? -1 : 1); }));
