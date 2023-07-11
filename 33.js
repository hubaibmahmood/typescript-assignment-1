var ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ordinal_numbers.length; i++) {
    if (ordinal_numbers[i] == 1) {
        console.log(ordinal_numbers[i] + 'st');
    }
    else if (ordinal_numbers[i] == 2) {
        console.log(ordinal_numbers[i] + 'nd');
    }
    else if (ordinal_numbers[i] == 3) {
        console.log(ordinal_numbers[i] + 'rd');
    }
    else {
        console.log(ordinal_numbers[i] + 'th');
    }
}
