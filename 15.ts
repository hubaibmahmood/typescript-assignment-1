let guest_list_old = ['Dominic', 'Jacob', 'Han']


console.log("Han can't make it")
guest_list_old[2] = 'Mia'

for (var i=0; i < guest_list_old.length; i++){
    console.log('Hey '+guest_list_old[i]+', are you available for the dinner tonight?')
}
