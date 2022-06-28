import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { BsShare } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { favoriteList } from "../pages/Home";

function Queue() {
  // var local = localStorage.getItem("playlist");
  // console.log(`this is local: ${local}, ${local.length}`);
  // console.log(`${local}`);
  // for (let k in localStorage) {
  //   if (k === "playlist") console.log(`${k}: ${localStorage[k].split(",")}`);
  // }

  // let play = localStorage["playlist"];
  // if (!play) {
  //   var plays = [];
  // } else {
  //   var plays = localStorage["playlist"].split(",");
  // }
  // const playlists = plays;
  const [playlist, setPlayList] = useState(favoriteList);

  const removeFromQueue = (title) => {
    // console.log(`title parameter: ${title}`);
    // const newPlayList = playlist.filter((p) => p.indexOf(title) !== title);
    // console.log(`newPlayList: ${newPlayList}`);
    // setPlayList(newPlayList);

    const index = playlist.indexOf(title);
    console.log(`index ${index}`);
    if (index > -1) {
      playlist.splice(index, 1);
      console.log(`deleted song: ${playlist}`);
      setPlayList(playlist);
    }
    return;
  };

  return (
    <>
      <section>
        {playlist.map((t, idx) => {
          return (
            <article key={idx}>
              {console.log(`${t} -> ${idx}`)}
              {t}
              <button className="brn-favorites">
                <MdOutlineFavoriteBorder />
              </button>
              <button
                className="btn-remove-song"
                onClick={() => removeFromQueue(t)}
              >
                <BsTrash />
              </button>
              <button>
                {" Share "}

                <BsShare />
              </button>
            </article>
          );
        })}
      </section>
      <button className="clr-all" onClick={() => setPlayList([])}>
        CLEAR ALL
      </button>
    </>
  );
}

export default Queue;
