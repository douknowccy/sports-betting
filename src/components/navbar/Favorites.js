import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/context";
function Favorites() {
  const {
    data: {
      user: { favoriteClub, favoriteLeague },
    },
  } = useGlobalContext();

  return (
    <FavoritesWrapper>
      <div className="favorites__title">
        <p className="title">FAVORITE LEAGUES</p>
        <p className="title__add">ADD</p>
      </div>
      {favoriteLeague?.map(({ id, title, url }) => {
        return (
          <div key={id} className="favorote__container">
            <div className="option">
              <img src={url} alt={title} />
              <h6>{title}</h6>
            </div>

            <p>⭐️</p>
          </div>
        );
      })}

      <div className="favorites__title">
        <p className="title">FAVORITE CLUB</p>
        <p className="title__add">ADD</p>
      </div>
      {favoriteClub?.map(({ id, title, url }) => {
        return (
          <div key={id} className="favorote__container">
            <div className="option">
              <img src={url} alt={title} />
              <h6>{title}</h6>
            </div>

            <p>⭐️</p>
          </div>
        );
      })}
    </FavoritesWrapper>
  );
}
const FavoritesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .favorites__title {
    display: flex;
    align-items: center;
    color: #8191a1;
    position: relative;
    margin-top: 10px;
  }
  .title {
    position: absolute;
    left: 20px;
  }
  .title__add {
    position: absolute;
    right: 10px;
  }
  .favorote__container {
    display: flex;
    margin-top: 10px;
    color: #9095a2;
    align-items: center;
    justify-content: space-between;
    .option {
      display: flex;
      align-items: center;
      font-size: 18px;
      color: #5f6169;
    }
    img {
      height: 36px;
      width: 36px;
      object-fit: contain;
      border-radius: 50%;
      margin: 10px;
    }
    p {
      margin-right: 20px;
      font-size: 12px;
    }
  }
`;

export default Favorites;
