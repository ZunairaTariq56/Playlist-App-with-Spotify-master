import React, {useCallback} from "react";
import TrackList from "./TrackList";

const Playlist = (props) => {
    const handleNameChange = useCallback(
      (event) => {
        props.onNameChange(event.target.value);
      },
      [props.onNameChange]
    );
  
    return (
        <div className="flex flex-row-reverse">
      <div className="flex flex-col items-center overflow-y-scroll max-h-96 p-10 bg-opacity-70 bg-blue-800 shadow-md scrollbar-none md:w-1/2 md:ml-8">
        <input
          onChange={handleNameChange}
          defaultValue={"New Playlist"}
          className="w-full border-b border-gray-600 outline-none bg-transparent text-white text-2xl"
        />
        <TrackList
          tracks={props.playlistTracks}
          isRemoval={true}
          onRemove={props.onRemove}
        />
        <button
          className="cursor-pointer w-40 p-2 border-0 border-radius-30 mt-5 bg-purple-700 hover:bg-purple-800 text-white text-lg transition duration-250 font-semibold"
          onClick={props.onSave}
        >
          SAVE TO SPOTIFY
        </button>
      </div>
      </div>
    );
  };
  
  export default Playlist;