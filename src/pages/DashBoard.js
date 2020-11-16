import React from "react";
import styled from "styled-components";

import Title from "../components/dashboard/Title";
import FootballGames from "../components/dashboard/FootballGames";
function DashBoard() {
  return (
    <DashBaordWrapper>
      {/* title */}

      <Title />

      {/* Hero */}
      <FootballGames />
    </DashBaordWrapper>
  );
}
const DashBaordWrapper = styled.div`
  flex: 0.6;
  background-color: #e1e5e7;
  height: 100vh;
  overflow-y: scroll;
  padding: 10px 10px 10px 30px;
  .dashboard__title {
    display: flex;
    align-items: center;

    position: relative;
    svg {
      position: absolute;
      margin: 2px 2px 2px 12px;
    }
    input {
      padding-left: 32px;
      height: 48px;
      width: 100%;
      border: none;
      background-color: #e0e2e7;
    }
    input:focus {
      outline: none;
    }
    input::placeholder {
      color: #9baabb;
      opacity: 0.75;
    }
  }
  .football__title {
    h2 {
      span {
        color: #858e9d;
      }
    }
  }
  .Football__games {
    display: flex;
    flex-direction: column;
  }
  .football__categories {
    color: #858e9d;
    display: flex;
    .category {
      flex: 0.5;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #858e9d;
      p {
        font-size: 12px;
        border-bottom: 3px solid transparent;
      }
    }
    .category p:hover {
      color: #2b88d3;
      border-bottom: 3px solid #2b88d3;
    }
    .category__more {
      flex: 0.5;

      display: flex;
      justify-content: flex-end;
    }
    p {
      font-size: 12px;
    }
  }
  .football__tables {
    display: flex;
    flex-direction: column;
  }
  .tables__title {
    display: flex;

    flex: 1;
    align-items: center;
    justify-content: space-between;
    .table__league,
    .table__country {
      display: flex;
      align-items: center;
      padding: 4px;
      p {
        font-size: 12px;
      }
      img {
        margin-right: 8px;
        height: 30px;
        width: 30px;
        object-fit: contain;
      }
    }
  }
  .table__item {
    height: 60px;
    border-radius: 10px;
    width: 100%;
    background-color: white;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
  }

  .item__left,
  .item__right {
    flex: 0.2;
    p {
      font-size: 12px;
    }
    display: flex;
    align-items: center;
    padding: 4px;
    .item__live {
      margin: 3px;
      padding: 2px;
      border-radius: 4px;
      border: 1px solid red;
      background-color: red;
      color: white;
      text-transform: uppercase;
      font-size: 4px;
    }
  }
  .item__center {
    display: flex;
    flex: 0.6;
    align-items: center;

    .item__home,
    .item__away {
      margin: 10px;
      flex: 0.4;
      display: flex;
      align-items: center;
      h2 {
        font-size: 12px;
      }
      img {
        margin-right: 8px;
        width: 30px;
        height: 30px;
        object-fit: contain;
      }
    }
    .item__score {
      flex: 0.2;
    }
  }
`;
export default DashBoard;
