let usernames = ['Admin', 'Eric', 'Jack', 'John', 'Hannah']

usernames = []

if (usernames.length != 0){

    for (var i=0; i< usernames.length; i++){
        if (usernames[i].toLowerCase() == 'admin'){
            console.log("Hello "+usernames[i]+", will you like to see a status report?")
        }
        else{
            console.log("Hello "+usernames[i]+", thank you for logging in again")
        }
    
    }
}
else{
    console.log('We need to find some users!')
}

