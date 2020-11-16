import React from "react";
import styled from "styled-components";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { useGlobalContext } from "../../context/context";
function Hero() {
  const {
    data: {
      user: { url, name, title, level, followers, following },
    },
  } = useGlobalContext();

  return (
    <HeroWrapper>
      <div className="hero">
        <img src={url} alt={name} />
        <h4>{name}</h4>
        <p>
          {title} • <span>{level} levels</span>
        </p>
      </div>
      <div className="hero__follower">
        <div className="followers">
          <BsFillPersonCheckFill className="follow__icon" />
          <div className="followers__info">
            <h4>{followers}</h4>
            <p>followers</p>
          </div>
        </div>
        <div className="following">
          <BsFillPersonPlusFill className="follow__icon" />
          <div className="following__info">
            <h4>{following}</h4>
            <p>following</p>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
}
const HeroWrapper = styled.div`
  margin-top: 20px;
  .hero {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    img {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      object-fit: contain;
    }
    h4 {
      margin-top: 10px;
      margin-bottom: 0;
    }
    p {
      margin-top: 10px;
      color: lightgray;
      span {
        color: #fa7c93;
        font-size: 12px;
      }
    }
  }
  .hero__follower {
    display: flex;
    justify-content: space-around;
    height: 60px;
    margin-top: 10px;
    width: 100%;
    .followers,
    .following {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      .follow__icon {
        font-size: 35px;
        margin-right: 10px;
        color: lightgray;
      }
      p {
        color: lightgray;
        font-size: 12px;
      }
    }
    .followers {
      border-right: 1.5px solid lightgray;
    }
  }
`;
export default Hero;
