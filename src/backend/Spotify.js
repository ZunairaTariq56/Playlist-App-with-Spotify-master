import axios from "axios";

const clientId = '4cf7d7180eb149a38ba7b04144c8c62f';
const redirectUri = 'http://localhost:3000/';
let accessToken;

const Spotify = {

    getaccessToken() {
        if(accessToken){
            return accessToken;
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if(accessTokenMatch && expiresInMatch){
            accessToken = accessTokenMatch[1];
            const expireIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expireIn*1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken
        }else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },
    async search(term) {
        try {
            // Get the access token
            const accessToken = Spotify.getaccessToken();
            console.log('Access Token:', accessToken);
           
            // Make an authenticated GET request to the Spotify API
            const response = await axios.get(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            console.log('API Response:', response);
    
            // Extract the JSON response data
            const jsonResponse = response.data;
            console.log('JSON Response:', jsonResponse);
    
            // Check if there are tracks in the response
            if (!jsonResponse.tracks) {
                console.log('No tracks found in the response.');
                return []; // No tracks found
            }
    
            // Map the track items to a more simplified format
            const tracks = jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
            console.log('Found Tracks:', tracks);
    
            return tracks; // Return the array of tracks
        } catch (error) {
            console.error('Error searching for tracks:', error);
            return []; // Return an empty array in case of an error
        }
    }
,    

    async savePlaylist(name, trackUris) {
        try {
          if (!name || !trackUris.length) {
            return;
          }
    
          const accessToken = Spotify.getAccessToken();
          const headers = {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          };
    
          // Get the user's ID
          const userResponse = await axios.get('https://api.spotify.com/v1/me', { headers });
          const userId = userResponse.data.id;
    
          // Create a new playlist
          const createPlaylistResponse = await axios.post(`https://api.spotify.com/v1/users/${userId}/playlists`, { name }, { headers });
          const playlistId = createPlaylistResponse.data.id;
    
          // Add tracks to the playlist
          await axios.post(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, { uris: trackUris }, { headers });
        } catch (error) {
          // Handle errors here (e.g., network error, invalid token, etc.)
          console.error('Error saving playlist:', error);
        }
      },

};

export default Spotify;