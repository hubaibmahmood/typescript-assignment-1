function sandwich_ingredients() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    console.log("The sandwich needs to have " + params + " in it");
}
sandwich_ingredients('Cheese', 'Jalapeno');
sandwich_ingredients('Cheese', 'Jalapeno', 'Cucumber', 'Chicken');
sandwich_ingredients('Cheese', 'Cucumber', 'Tomato', 'Onions');
