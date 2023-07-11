var guest_list_ = ['Dominic', 'Jacob', 'Han'];
console.log("Han can't make it");
guest_list_[2] = 'Mia';
// console.log('Hey, hope you all are fine. I just found a bigger dinner table')
guest_list_.splice(0, 0, 'Brian');
guest_list_.splice(2, 0, 'Roman');
guest_list_.push('Luke');
console.log('Hey, It is inform you all that I can invite only two people');
while (true) {
    if (guest_list_.length == 2) {
        break;
    }
    var removed_guest = guest_list_.pop();
    console.log('Hey ' + removed_guest + ", Sorry to inform you that I can't invite you to the dinner!");
}
while (true) {
    if (guest_list_.length <= 0) {
        break;
    }
    var invited_guest = guest_list_.pop();
    console.log('Hey ' + invited_guest + ", It is to inform you that you are still invited to the dinner!");
}
console.log(guest_list_);
