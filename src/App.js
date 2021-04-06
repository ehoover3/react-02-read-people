import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useStore } from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
//VIEWS
import Navigation from "./components/Navigation";
import LoginPage from "./views/0_LoginPage";
import Home from "./views/1_Home";
import Learn from "./views/2_Learn";
import Chat from "./views/3_Chat";
import Shop from "./views/4_Shop";
import NotFound from "./views/5_NotFound";
import Quiz from "./components/2_Learn/Quiz";
import NewProfile from "./views/6_NewProfile";

function App() {
  const user = useStore((state) => state.user);

  if (!user.token) {
    // User Hasn't Logged In
    return (
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/NewProfile" component={NewProfile} />
        <Route component={NotFound} />
      </Switch>
    );
  } else {
    // User Logged In
    return (
      <Container className="App_Container">
        <Navigation />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Learn" component={Learn} />
          <Route exact path="/2_Learn/Quiz" component={Quiz} />
          <Route exact path="/Chat" component={Chat} />
          <Route exact path="/Shop" component={Shop} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    );
  }
}

export default App;
