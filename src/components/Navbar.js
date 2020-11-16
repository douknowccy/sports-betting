import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { MdSettings } from "react-icons/md";
import { CgDetailsLess } from "react-icons/cg";

import Hero from "./navbar/Hero";
import Options from "./navbar/Options";
import Favorites from "./navbar/Favorites";

function Navbar() {
  return (
    <NavbarWrapper>
      <div className="navbar__title">
        <CgDetailsLess className="title__icon" />
        <img src={logo} alt="LOGO" />
        <MdSettings className="title__icon" />
      </div>
      <Hero />
      <Options />
      <Favorites />
    </NavbarWrapper>
  );
}
const NavbarWrapper = styled.div`
  /* flex: 0.2; */
  width: 260px;
  height: 100vh;
  background-color: white;
  overflow-y: scroll;
  //chrome
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /*IE Edge*/
  scrollbar-width: none; /*firefox*/
  .navbar__title {
    margin-top: 20px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .title__icon {
      font-size: 20px;
      color: lightgray;
    }
    img {
      height: 50px;
      object-fit: contain;
    }
  }
`;
export default Navbar;
