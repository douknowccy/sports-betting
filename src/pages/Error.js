import React from "react";
import styled from "styled-components";
function Error() {
  return <ErrorWrapper>ERROR PAGE</ErrorWrapper>;
}
const ErrorWrapper = styled.div`
  flex: 0.8;
  background-color: #e1e5e7;
  height: 100vh;
  padding: 10px 10px 10px 30px;
`;
export default Error;
