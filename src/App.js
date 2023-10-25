import React, { useState, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import TrackList from "./components/TrackList";
import Spotify from "./backend/Spotify";
import Playlist from "./components/Playlist";
import SearchResults from "./components/SearchResults";
import { trackss } from "./data"
function App() {

  const [searchResults, setSearchResults] = useState(trackss);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);



  return (
    <div className="App">
    <div className="main">
      <Header />
      <Home onSearch={search}/>
      <div>
        <SearchResults searchResults={searchResults} onAdd={addTrack}/>
        <Playlist 
        playlistName={playlistName}
        playlistTracks={playlistTracks}
        onNameChange={updatePlaylistName}
        onRemove={removeTrack}
        onSave={savePlaylist}
        />
        <TrackList tracks={searchResults} />

      </div>
    </div>
    </div>
  );
}

export default App;
