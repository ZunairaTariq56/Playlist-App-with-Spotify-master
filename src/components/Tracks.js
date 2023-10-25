import React, { useCallback } from "react";

const Tracks = (props) => {
    
    const addTrack = useCallback((event) => {
        props.onAdd(props.track);
    },[props.onAdd, props.track]);

    const removeTrack = useCallback((event) => {
        props.onRemove(props.track);
    },[props.onRemove, props.track]);

    const renderAction = () => {
        if(props.isRemoval){
            return (
                <button className="cursor-pointer p-2 text-xl transition duration-250 border-0 bg-transparent text-white" onClick={removeTrack} >
          -
            </button>
            );
        } else {
            return (
                <button className="cursor-pointer p-2 text-xl transition duration-250 border-0 bg-transparent text-white" onClick={addTrack} >
                +
                </button>
            );
        }
    }

    return (
        <div className="flex items-center border-b border-gray-800">
      <div className="flex-grow flex flex-col justify-center h-16">
        <h3 className="mb-2 text-xl">{props.track.name}</h3>
        <p className="text-sm font-light text-gray-800">
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {renderAction()}
    </div>
    );
}

export default Tracks;