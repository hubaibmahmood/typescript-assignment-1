function sandwich_ingredients(...params:any[]) {
    console.log("The sandwich needs to have "+params+" in it")
}


sandwich_ingredients('Cheese', 'Jalapeno')
sandwich_ingredients('Cheese', 'Jalapeno', 'Cucumber', 'Chicken')
sandwich_ingredients('Cheese', 'Cucumber', 'Tomato', 'Onions')