let magician_names_ = ['Magician1', 'Magician2', 'Magician3']



function make_great(magicians:string[]){
    for (var i=0; i < magicians.length; i++){
        magicians[i] = magicians[i]+" the Great"
    }

    return magicians
}



function show_magician(magicians:string[]){

    for (var i=0; i< magicians.length;i++){
        console.log(magicians[i])
    }
}


let new_magician = make_great([...magician_names_])

console.log("Original Array: ")
show_magician(magician_names_)

console.log("\nNew Array")
show_magician(new_magician)

