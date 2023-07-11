
function cars(manufacturer:string, model_name:string, other:{[key:string]:any}) {
    const car_detail = {
        manufacturer: manufacturer,
        model:model_name,
        other_features:other
    }
    return car_detail
}



let response = cars('Toyota', 'Corolla', {'color':'black', 'Hatchback': 'yes'})
console.log(response)


response = cars('Toyota', 'Supra', {'color':'Grey', 'Turbo': 'yes', 'Air Suspension':'yes'})
console.log(response)