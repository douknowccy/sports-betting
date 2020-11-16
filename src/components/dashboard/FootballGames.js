import React from "react";
import { MdExpandMore } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { MdExpandLess } from "react-icons/md";

import { useGlobalContext } from "../../context/context";

function FootballGames() {
  const { football, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div>none.</div>;
  }
  return (
    <>
      <div className="football__title">
        <h2>
          Football <span>Games</span>
        </h2>
      </div>
      <div className="Football__games">
        <div className="football__categories">
          <div className="category">
            <p>All Games</p>
            <p>LIVE Games</p>
            <p>Finished</p>
            <p>Scheduled</p>
            <p>Pined</p>
          </div>
          <div className="category__more">
            <MdExpandMore />
            <p>MORE BETS</p>
          </div>
        </div>
        {!football[0] ? (
          <div>none match data</div>
        ) : (
          <div className="football__tables">
            <div className="tables__title">
              <div className="table__country">
                <img
                  src={football[0]?.country.url}
                  alt={football[0]?.country.name}
                />
                <p> {football[0]?.country.name}</p>
              </div>

              <div className="table__league">
                <img
                  src={football[0]?.league.url}
                  alt={football[0]?.league.name}
                />
                <p> {football[0]?.league.name}</p>

                <AiFillStar style={{ color: "#B1C1C6", margin: "10px" }} />
              </div>
              <MdExpandLess />
            </div>
            <div className="table__container">
              {football?.map((item, index) => {
                return (
                  <div key={index} className="table__item">
                    <div className="item__left">
                      <p>{item.date}</p>
                      {item.status === "live" && (
                        <p className="item__live">{item.status}</p>
                      )}
                    </div>
                    <div className="item__center">
                      <div className="item__away">
                        <img src={item.away.url} alt={item.away.name} />
                        <h2>{item.away.name}</h2>
                      </div>
                      <div className="item__score">
                        <h4>
                          {item.away.score} : {item.home.score}
                        </h4>
                      </div>
                      <div className="item__home">
                        <img src={item.home.url} alt={item.home.name} />
                        <h2>{item.home.name}</h2>
                      </div>
                    </div>
                    <div className="item__right">
                      <p>followers</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default FootballGames;
