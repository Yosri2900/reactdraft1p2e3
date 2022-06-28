import React, { useState } from "react";
import { data } from "../data/songdata";
// import { useHistory } from "react-router-dom";
// import  from "../components/Songs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CgPlayListAdd } from "react-icons/cg";
import { BsHeadphones } from "react-icons/bs";
import { Link } from "react-router-dom";

// import Songs from "../data/Songs";

// const PAGE_PRODUCTS = "products";
// const PAGE_CART = "cart";
export const favoriteList = [];
function Home() {
  const dataCopy = [...data];
  const LIMIT = data.length;
  let [start, setStart] = useState(0);
  let [end, setEnd] = useState(6);
  let toShow = dataCopy.slice(start, end);
  // const favoriteList = [];

  // const [favoriteList, setFavoriteList] = useState([]);

  const prevItems = () => {
    setStart((start) => {
      var newStart = start - 6;
      if (newStart < 0) {
        newStart = LIMIT - 7;
      }
      console.log(`start is ${newStart}`);
      return checkNumber(newStart);
    });

    setEnd((end) => {
      var newEnd = end - 6;
      if (newEnd === 0) {
        newEnd = LIMIT - 1;
      }
      console.log(`end is ${newEnd}`);
      return checkNumber(newEnd);
    });
  };

  const randomItems = () => {
    let [first, second] = generateTwoNumbers(LIMIT);

    if (first === start) {
      first = start + 6;
    }

    if (second === end) {
      second = end + 6;
    }
    setStart(checkNumber(first));
    setEnd(checkNumber(second));
  };

  const nextItems = () => {
    setStart((start) => {
      let newStart = start + 6;
      return checkNumber(newStart);
    });

    setEnd((end) => {
      let newEnd = end + 6;
      return checkNumber(newEnd);
    });
  };

  const generateTwoNumbers = (limit) => {
    var a = Math.floor(Math.random() * limit);
    var b = Math.floor(Math.random() * limit);

    while (b - a !== 6 && b < limit) {
      a = Math.floor(Math.random() * limit);
      b = Math.floor(Math.random() * limit);
    }

    return [a, b];
  };

  const checkNumber = (number) => {
    // if (number < 0) return LIMIT - 1;
    if (number > LIMIT - 1) return 0;

    return number;
  };

  const addToFavorites = (song) => {
    if (favoriteList.indexOf(song) === -1) favoriteList.push(song);
    // console.log(`favorite : ${favoriteList}`);
    // console.log(`new list: ${newList}`);
    // setFavoriteList(newList);
    // songsHistory.push(song);
    // localStorage.setItem("playlist", favoriteList);

    // console.log(`${localStorage.getItem("playlist")}`);
    // console.log(`${localStorage}`);
    // setFavoriteList([song, ...favoriteList]);
    // console.log(`this is favoriteList: ${favoriteList}`);
    return;
  };

  return (
    <>
      <section className="songlist">
        {toShow.map((song) => {
          // console.log(`song.SongNumber ${song}`);
          return (
            <SpecificSong
              key={song.SongNumber}
              {...song}
              addToFavorites={addToFavorites}
            ></SpecificSong>
          );
        })}
      </section>

      <div className="arrows-container">
        <button className="btn-prev" onClick={prevItems}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className="btn-next" onClick={nextItems}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
      <div className="btn-container">
        <button className="btn-surprise" onClick={randomItems}>
          Surprise Me
        </button>
      </div>
      <button className="btn-listen">
        <Link to="/queue">
          <BsHeadphones className="headphones-logo"></BsHeadphones>
          Listen
        </Link>
      </button>
    </>

    // <>
    //   <div className="App">
    //     <header>
    //       <button onClick={() => navigateTo(PAGE_CART)}>
    //         Go to Cart ({getCartTotal()})
    //       </button>

    //       <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
    //         View Products
    //       </button>
    //     </header>
    //     {page === PAGE_PRODUCTS && <Songs cart={cart} setCart={setCart} />}
    //     {page === PAGE_CART && <Favorites cart={cart} setCart={setCart} />}
    //   </div>
    // </>
  );
}

const SpecificSong = ({
  SongNumber,
  SongID,
  ArtistName,
  Title,
  Duration,
  addToFavorites,
}) => {
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
      <h1>{(Title = Title.replace(/[^a-zA-Z ]/g, ""))}</h1>
      <span>{fixDuration(Duration / 60)} mins</span>
      <div>
        <button className="add-song">
          <CgPlayListAdd
            className="add-logo"
            onClick={() => addToFavorites(Title)}
          ></CgPlayListAdd>
        </button>
      </div>
    </article>
  );
};

export default Home;
