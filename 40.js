function make_album(artist_name, album_title, tracks) {
    if (tracks === void 0) { tracks = 0; }
    if (tracks > 0) {
        var album = {
            artist: artist_name,
            title: album_title,
            tracks: tracks
        };
        return album;
    }
    else {
        var album = {
            artist: artist_name,
            title: album_title
        };
        return album;
    }
}
var response = make_album('John', "How to code like a pro");
console.log(response);
response = make_album('Kevin', "How to make a professional website", 6);
console.log(response);
response = make_album('Jackie', "How to build AI apps", 28);
console.log(response);
