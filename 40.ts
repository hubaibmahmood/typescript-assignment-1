interface albums_info {
    artist: string;
    title: string;
}

interface album_info_with_tracks{
    artist: string;
    title: string;
    tracks: number;
}

function make_album(artist_name:string, album_title:string, tracks:number=0) {
    if (tracks > 0){
        const album :album_info_with_tracks = {
            artist: artist_name,
            title:album_title,
            tracks:tracks
        }
        return album
    }
    else{
        const album:albums_info = {
            artist: artist_name,
            title:album_title            
        }

        return album
    }
}

let response = make_album('John', "How to code like a pro")
console.log(response)

response = make_album('Kevin', "How to make a professional website", 6)
console.log(response)

response = make_album('Jackie', "How to build AI apps", 28)
console.log(response)