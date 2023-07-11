var guest_list_prevoius = ['Dominic', 'Jacob', 'Han'];
console.log("Han can't maeke it");
guest_list_prevoius[2] = 'Mia';
console.log('Hey, hope you all are fine. I just found a bigger dinner table');
guest_list_prevoius.splice(0, 0, 'Brian');
guest_list_prevoius.splice(2, 0, 'Roman');
guest_list_prevoius.push('Luke');
for (var i = 0; i < guest_list_prevoius.length; i++) {
    console.log('Hey ' + guest_list_prevoius[i] + ', are you available for the dinner tonight?');
}
