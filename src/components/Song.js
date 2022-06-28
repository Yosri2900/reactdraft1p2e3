import React, { Component } from "react";
import { CgPlayListAdd } from "react-icons/cg";

function Song({
  SongNumber,
  SongID,
  ArtistName,
  Title,
  Duration,
  addToFavorites,
}) {
  const fixDuration = (duration) => {
    var decimal = (duration - Math.floor(duration)).toFixed(2);
    if (decimal > 0.59) {
      return Math.ceil(duration).toString();
    }
    var stringNum = duration.toFixed(2).toString();
    stringNum = stringNum.replace(".", ":");
    return stringNum;
  };
  return (
    <article className="song">
      <h1>{Title.replace("'", "")}</h1>
      <span>mins</span>
      <div>
        <button className="add-song">
          <CgPlayListAdd className="add-logo"></CgPlayListAdd>
        </button>
      </div>
    </article>
  );
}
// SongNumber: 238,
// SongID: "SOEESQT12A8C13C7D5'",
// ArtistName: "Jazz Gillum'",
// Title: "Me And My uddy'",
// Duration: 185.67791,

export default Song;
