/**
 *
 * FETCH AND ASYNC/AWAIT
 *
 * fetch() cheatsheet - https://devhints.io/js-fetch
 * Understanding the Fetch API - https://medium.freecodecamp.org/understanding-the-fetch-api-a7d4c08c2a7
 *
 */

// PROMISE HELL
fetch('https://api.spotify.com/v1/search?q=madona&type=artist', {
    headers: {
        Authorization: TOKEN
    }
})
    .then(res => res.json())
    .then(res => {
        const ID = res.artists.items[2].id;
        return fetch(`https://api.spotify.com/v1/artists/${ID}/albums`, {
            headers: {
                Authorization: TOKEN
            }
        }).then(res => res.json());
    })
    .then(res => {
        const ID = res.items[0].id;
        return fetch(`https://api.spotify.com/v1/albums/${ID}/tracks`, {
            headers: {
                Authorization: TOKEN
            }
        }).then(res => res.json());
    })
    .then(console.log);

function customFetch(url, options) {
    return fetch(url, options);
}

// ASYNC AWAIT (One solution to Promise Hell)
async function asyncFunct() {
    const OPT = {
        headers: {
            Authorization: TOKEN
        }
    };
    const URLArtist = 'https://api.spotify.com/v1/search?q=madona&type=artist';

    const IdArtists = await customFetch(URLArtist, OPT)
        .then(res => res.json())
        .then(res => res.artists.items[0].id);

    const URLAlbums = `https://api.spotify.com/v1/artists/${IdArtists}/albums`;

    const IDAlbum = await customFetch(URLAlbums, OPT)
        .then(res => res.json())
        .then(res => res.items[0].id);

    const URLTracks = `https://api.spotify.com/v1/albums/${IDAlbum}/tracks`;
    const tracks = await customFetch(URLTracks, OPT);

    console.log(tracks);
}
asyncFunct();