import React from "react";
import styled from "styled-components";
function Error() {
  return <ErrorWrapper>Building...</ErrorWrapper>;
}
const ErrorWrapper = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
  background-color: #e1e5e7;
  height: 100vh;
  padding: 10px 10px 0 0;
`;
export default Error;
