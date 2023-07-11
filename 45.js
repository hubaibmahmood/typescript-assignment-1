function cars(manufacturer, model_name, other) {
    var car_detail = {
        manufacturer: manufacturer,
        model: model_name,
        other_features: other
    };
    return car_detail;
}
var response = cars('Toyota', 'Corolla', { 'color': 'black', 'Hatchback': 'yes' });
console.log(response);
response = cars('Toyota', 'Supra', { 'color': 'Grey', 'Turbo': 'yes', 'Air': 'yes' });
console.log(response);
