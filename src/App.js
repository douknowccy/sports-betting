import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
//components
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import { auth } from "./firebase";
//context
import { useGlobalContext } from "./context/context";

//pages
import DashBoard from "./pages/DashBoard";
import Error from "./pages/Error";

function App() {
  return (
    <AppWrapper>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <DashBoard />
            <Rightbar />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
`;
export default App;
