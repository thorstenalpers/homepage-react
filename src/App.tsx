import * as React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router";
import AboutMe from "./components/AboutMe";
import { HashRouter } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Skills from "./components/Skills";
import Cv from "./components/Cv";
import { Container, Row } from "react-bootstrap";
import "./custom.css";
import Footer from "./components/Footer";

const NavMenuWithRouter = withRouter(NavMenu);

const App = () => {
  return (
    <Container>
      <HashRouter>
        <NavMenuWithRouter />
        <Row id="spacer"> </Row>
        <Switch>
          <Route exact path="/Home" component={AboutMe} />
          <Route path="/Kenntnisse" component={Skills} />
          <Route path="/Lebenslauf" component={Cv} />
          <Redirect to="/Home" />
        </Switch>
        <br />
        <Footer />
      </HashRouter>
    </Container>
  );
};

export default App;
