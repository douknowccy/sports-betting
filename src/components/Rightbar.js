import React from "react";
import styled from "styled-components";
function Rightbar() {
  return (
    <RightbarWrapper>
      <p>rightbar</p>
    </RightbarWrapper>
  );
}
const RightbarWrapper = styled.div`
  flex: 0.2;
  background-color: #e1e5e7;
  height: 100vh;
  overflow-y: scroll;
  padding: 10px 10px 10px 30px;
`;
export default Rightbar;
