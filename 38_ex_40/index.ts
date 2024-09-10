function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
    let album : Record<string, any> = {
        "artist": artist,
        "title": title
    };
    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }
    return album;
}

// Call the function to make three dictionaries representing different albums
let album1 = make_album("Artist 1", "Album 1");
let album2 = make_album("Artist 2", "Album 2", 10);  //including the number of tracks
let album3 = make_album("Artist 3", "Album 3");

// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);

