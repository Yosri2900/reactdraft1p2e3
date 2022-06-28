// import React, { Component } from "react";
// import { CgPlayListAdd } from "react-icons/cg";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { BsHeadphones } from "react-icons/bs";
// import Song from "./Song";
// import { SongsConsumer } from "../context/context";
// import { Link } from "react-router-dom";

// export default class SongList extends Component {
//   render() {
//     return (
//       <>
//         <section className="songlist">
//           <SongsConsumer>
//             {(value) => {
//               console.log(`fwfwfwefwfwrfew ${value}`);
//               //   return value.products.map((song) => {
//               //     return song;
//               //   });
//             }}
//           </SongsConsumer>
//         </section>

//         <div className="arrows-container">
//           <button className="btn-prev">
//             <FaChevronLeft></FaChevronLeft>
//           </button>
//           <button className="btn-next">
//             <FaChevronRight></FaChevronRight>
//           </button>
//         </div>
//         <div className="btn-container">
//           <button className="btn-surprise">Surprise Me</button>
//         </div>
//         <Link to="/queue">
//           <button className="btn-listen">
//             <BsHeadphones className="headphones-logo"></BsHeadphones>
//             Listen
//           </button>
//         </Link>
//       </>
//     );
//   }
// }
