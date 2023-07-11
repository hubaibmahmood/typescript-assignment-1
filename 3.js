var person1 = 'hubaib mehmood';
console.log('Uppercase: ' + person1.toLowerCase());
console.log('Lowercase: ' + person1.toUpperCase());
var person_to_title = person1.toLowerCase().split(' ');
for (var i = 0; i < person_to_title.length; i++) {
    person_to_title[i] = person_to_title[i].charAt(0).toUpperCase() + person_to_title[i].slice(1);
}
var name_converted = person_to_title.join(' ');
console.log("Titlecase: " + name_converted);
