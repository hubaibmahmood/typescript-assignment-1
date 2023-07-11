let magician_names_ = ['Magician1', 'Magician2', 'Magician3']



function make_great(){
    for (var i=0; i < magician_names_.length; i++){
        magician_names_[i] = magician_names_[i]+" the Great"
    }
}



function show_magician(magicians:string[]){


    for (var i=0; i< magicians.length;i++){
        console.log(magicians[i])
    }
}


make_great()
show_magician(magician_names_)