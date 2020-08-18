export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUrl = 'http://localhost:3000/';

const clientId = 'ecc1d3d831e5454d9c9ac5e39a066f69';
const scopes = [
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
    "user-modify-playback-state"
]

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        // accessToken=mysupersecretkey&name=abc
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial

    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
// 1. Click LOGIN button
// 2. Redirect to SPOTIFY login page
// 3. Redirect to homepage once logged