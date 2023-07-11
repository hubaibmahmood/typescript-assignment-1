let inivited_guest_list = ['Dominic', 'Jacob', 'Han']


inivited_guest_list[2] = 'Mia'

inivited_guest_list.splice(0,0,'Brian')
inivited_guest_list.splice(2,0,'Roman')
inivited_guest_list.push('Luke')


console.log('Invite guests for bigger dinner table: '+inivited_guest_list.length)