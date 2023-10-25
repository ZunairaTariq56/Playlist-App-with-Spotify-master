import React from "react";


const TrackList = ({tracks}) => {
  return (
    <>
    
      {tracks.map((track, i) => {
        return (
          <div className="w-1/2 container w-80 bg-cyan-950/[0.5]  mx-auto px-4" key={i}>
            <h3 className="text-base text-base/7 p-0.5">{track.name}</h3>
            <p className="text-sm font-semibold p-0.5 text-slate-500">{track.artist} | {track.album}</p>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
};

export default TrackList;
