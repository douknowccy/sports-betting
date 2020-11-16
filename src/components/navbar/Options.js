import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../context/context";
function Options() {
  const { data } = useGlobalContext();

  return (
    <OptionsWrapper>
      {data?.dashboard.map(({ id, link, icon, title }) => {
        return (
          <Link key={id} to={link} className="option">
            <div className="option__choose"></div>
            {icon}
            <p>{title}</p>
          </Link>
        );
      })}
    </OptionsWrapper>
  );
}
const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 30px;

  height: 300px;
  width: 100%;
  .option {
    display: flex;
    margin-top: 10px;
    align-items: center;
    flex: 0.25;
    text-decoration: none;
    color: lightgray;
    p {
      color: #535c6e;
    }
  }
  .option__choose {
    width: 10px;
    height: 100%;
    border-left: 3px solid transparent;
    margin-right: 10px;
  }
  .option__icon {
    margin-right: 20px;
    font-size: 22px;
  }
  .option:hover {
    color: #3382c3;
    p {
      color: black;
      font-weight: bold;
    }
    .option__choose {
      width: 10px;
      height: 100%;
      border-left: 3px solid #3382c3;
    }
  }
`;
export default Options;
