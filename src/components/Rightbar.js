import React from "react";
import styled from "styled-components";
import Bankroll from "./rightbar/Bankroll";
import { useGlobalContext } from "../context/context";
import TopFollowing from "./rightbar/TopFollowing";
import Notifications from "./rightbar/Notifications";
function Rightbar() {
  const {
    data: {
      user: { bankroll },
    },
  } = useGlobalContext();
  console.log(bankroll);
  console.log(bankroll.length);
  return (
    <RightbarWrapper>
      <div className="bankroll__title">
        <p>Your Balance</p>
        <p>$ {bankroll[bankroll.length - 1]}</p>
      </div>
      <Bankroll />
      <TopFollowing />
      <Notifications />
    </RightbarWrapper>
  );
}
const RightbarWrapper = styled.div`
  width: 200px;
  background-color: #e1e5e7;
  height: 100vh;
  overflow-y: scroll;
  padding: 10px 10px 0 0;
  .bankroll__title {
    display: flex;
    justify-content: space-between;
  }
`;
export default Rightbar;
