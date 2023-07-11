let current_usernames = ['Admin', 'Eric Willson', 'Jack', 'John', 'Hannah']
let new_users = ['Eric Willson', 'JOHN', 'Murphy', 'Will', 'Nancy']

new_users.forEach(function (value) {

    let duplicate = false

    for (var i=0; i<current_usernames.length;i++){
        if (current_usernames[i].toLowerCase() == value.toLowerCase()){
            console.log('The person will need to enter a new username')
            duplicate = true
            break
        }
    }
    if (duplicate == false){
        console.log('The username is available.')

    }
    
})
