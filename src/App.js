import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useStore } from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
//VIEWS
import LoginPage from "./views/1Login";
import NewUser from "./components/1Login/NewUser";
import Navigation from "./components/0navigation/Navigation";
import SideBar from "./components/0sidebar/SideBar.js";
import Error_404 from "./views/0Error";
import Home from "./views/2Home";
import Grow from "./views/3Grow";
import Talk from "./views/4Talk";
import Play from "./views/5Play";
import User from "./views/6User";
//GROW - SUBSECTIONS
import Quiz from "./components/3Grow/Quiz";
import Video1 from "./components/3Grow/videos/Video1";
import Video2 from "./components/3Grow/videos/Video2";

function App() {
  const user = useStore((state) => state.user);
  const openSidebar = useStore((state) => state.openSidebar);

  if (!user.token) {
    // User Hasn't Logged In
    return (
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/NewProfile" component={NewUser} />
        <Route component={Error_404} />
      </Switch>
    );
  } else {
    // User Logged In
    return (
      <Container className="App_Container">
        <Navigation />
        <SideBar />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Grow" component={Grow} />
          <Route exact path="/Talk" component={Talk} />
          <Route exact path="/Play" component={Play} />
          <Route exact path="/User" component={User} />
          <Route exact path="/Grow/Quiz" component={Quiz} />
          <Route exact path="/Grow/Video1" component={Video1} />
          <Route exact path="/Grow/Video2" component={Video2} />
          <Route exact path="/" component={Home} />
          <Route component={Error_404} />
        </Switch>
      </Container>
    );
  }
}
export default App;
