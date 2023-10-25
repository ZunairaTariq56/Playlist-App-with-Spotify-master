import React from "react";
import TrackList from "./TrackList";

const SearchResults = (props) => {
    return (
      <div class="w-1/2 h-96 overflow-y-scroll p-2 bg-opacity-70 bg-blue-800 shadow-md scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-transparent">
        <h2>Results</h2>
        <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
      </div>
    );
  };
  
  export default SearchResults;