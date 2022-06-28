import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Listen",
    path: "/queue",
    icon: <AiOutlineArrowDown></AiOutlineArrowDown>,
    cName: "nav-text",
  },
  {
    title: "Favorites",
    path: "/favorites",
    icon: <MdOutlineFavoriteBorder></MdOutlineFavoriteBorder>,
    cName: "nav-text",
  },
  // {
  //   title: "Favorites",
  //   path: "/favorites",
  //   icon: <MdOutlineFavoriteBorder></MdOutlineFavoriteBorder>,
  //   cName: "nav-text",
  // },

  // {
  //   title: "Shared",
  //   path: "/shared",
  //   icon: <BsShare></BsShare>,
  //   cName: "nav-text",
  // },
];
