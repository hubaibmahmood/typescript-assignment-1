function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The size of the shirt is " + size + " With text stated: " + message);
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'I love Python too');
