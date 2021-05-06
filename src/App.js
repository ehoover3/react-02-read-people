import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useStore } from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
//VIEWS
import LoginPage from "./views/1login";
import NewUser from "./components/1login/newUser";
import Navigation from "./components/0navbar/navbar";
import Error_404 from "./views/0error";
import Home from "./views/2home";
import Grow from "./views/3grow";
import Talk from "./views/4talk";
import Play from "./views/5play";
import User from "./views/6user";
//GROW - SUBSECTIONS
import Quiz from "./components/3grow/quiz";
import Video from "./components/3grow/video";

function App() {
  const user = useStore((state) => state.user);

  // if (!user.token) {
  //   // User Hasn't Logged In
  //   return (
  //     <Switch>
  //       <Route exact path="/" component={LoginPage} />
  //       <Route exact path="/NewProfile" component={NewUser} />
  //       <Route component={Error_404} />
  //     </Switch>
  //   );
  // } else {
  // User Logged In
  return (
    <Container className="App_Container">
      <Navigation />
      <Switch>
        // <Route exact path="/" component={Grow} />
        <Route exact path="/Grow" component={Grow} />
        <Route exact path="/Talk" component={Talk} />
        <Route exact path="/Play" component={Play} />
        <Route exact path="/User" component={User} />
        <Route exact path="/Quiz" component={Quiz} />
        <Route exact path="/Video" component={Video} />
        <Route exact path="/" component={Home} />
        <Route component={Error_404} />
      </Switch>
    </Container>
  );
}

export default App;
