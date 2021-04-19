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
import Quiz1 from "./components/3Grow/quizzes/Quiz1";
import Quiz2 from "./components/3Grow/quizzes/Quiz2";
import Quiz3 from "./components/3Grow/quizzes/Quiz3";
import Video from "./components/3Grow/videos/Video";
import Video1 from "./components/3Grow/videos/Video1";
import Video2 from "./components/3Grow/videos/Video2";
import Video3 from "./components/3Grow/videos/Video3";
import Video4 from "./components/3Grow/videos/Video4";
import Video5 from "./components/3Grow/videos/Video5";
import Video6 from "./components/3Grow/videos/Video6";
import Video7 from "./components/3Grow/videos/Video7";
import Video8 from "./components/3Grow/videos/Video8";
import Video9 from "./components/3Grow/videos/Video9";
import Video10 from "./components/3Grow/videos/Video10";
import Video11 from "./components/3Grow/videos/Video11";
import Video12 from "./components/3Grow/videos/Video12";
import Video13 from "./components/3Grow/videos/Video13";
import Video14 from "./components/3Grow/videos/Video14";
import Video15 from "./components/3Grow/videos/Video15";
import Video16 from "./components/3Grow/videos/Video16";
import Video17 from "./components/3Grow/videos/Video17";
import Video18 from "./components/3Grow/videos/Video18";
import Video19 from "./components/3Grow/videos/Video19";
import Video20 from "./components/3Grow/videos/Video20";
import Video21 from "./components/3Grow/videos/Video21";
import Video22 from "./components/3Grow/videos/Video22";
import Video23 from "./components/3Grow/videos/Video23";
import Video24 from "./components/3Grow/videos/Video24";
import Video25 from "./components/3Grow/videos/Video25";
import Video26 from "./components/3Grow/videos/Video26";
import Video27 from "./components/3Grow/videos/Video27";
import Video28 from "./components/3Grow/videos/Video28";
import Video29 from "./components/3Grow/videos/Video29";
import Video30 from "./components/3Grow/videos/Video30";
import Video31 from "./components/3Grow/videos/Video31";
import Video32 from "./components/3Grow/videos/Video32";
import Video33 from "./components/3Grow/videos/Video33";
import Video34 from "./components/3Grow/videos/Video34";
import Video35 from "./components/3Grow/videos/Video35";

function App() {
  const user = useStore((state) => state.user);

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
          <Route exact path="/Grow/Quiz1" component={Quiz1} />
          <Route exact path="/Grow/Quiz2" component={Quiz2} />
          <Route exact path="/Grow/Quiz3" component={Quiz3} />
          <Route exact path="/Grow/Video" component={Video} />
          <Route exact path="/Grow/Video1" component={Video1} />
          <Route exact path="/Grow/Video2" component={Video2} />
          <Route exact path="/Grow/Video3" component={Video3} />
          <Route exact path="/Grow/Video4" component={Video4} />
          <Route exact path="/Grow/Video5" component={Video5} />
          <Route exact path="/Grow/Video6" component={Video6} />
          <Route exact path="/Grow/Video7" component={Video7} />
          <Route exact path="/Grow/Video8" component={Video8} />
          <Route exact path="/Grow/Video9" component={Video9} />
          <Route exact path="/Grow/Video10" component={Video10} />
          <Route exact path="/Grow/Video11" component={Video11} />
          <Route exact path="/Grow/Video12" component={Video12} />
          <Route exact path="/Grow/Video13" component={Video13} />
          <Route exact path="/Grow/Video14" component={Video14} />
          <Route exact path="/Grow/Video15" component={Video15} />
          <Route exact path="/Grow/Video16" component={Video16} />
          <Route exact path="/Grow/Video17" component={Video17} />
          <Route exact path="/Grow/Video18" component={Video18} />
          <Route exact path="/Grow/Video19" component={Video19} />
          <Route exact path="/Grow/Video20" component={Video20} />
          <Route exact path="/Grow/Video21" component={Video21} />
          <Route exact path="/Grow/Video22" component={Video22} />
          <Route exact path="/Grow/Video23" component={Video23} />
          <Route exact path="/Grow/Video24" component={Video24} />
          <Route exact path="/Grow/Video25" component={Video25} />
          <Route exact path="/Grow/Video26" component={Video26} />
          <Route exact path="/Grow/Video27" component={Video27} />
          <Route exact path="/Grow/Video28" component={Video28} />
          <Route exact path="/Grow/Video29" component={Video29} />
          <Route exact path="/Grow/Video30" component={Video30} />
          <Route exact path="/Grow/Video31" component={Video31} />
          <Route exact path="/Grow/Video32" component={Video32} />
          <Route exact path="/Grow/Video33" component={Video33} />
          <Route exact path="/Grow/Video34" component={Video34} />
          <Route exact path="/Grow/Video35" component={Video35} />

          <Route exact path="/" component={Home} />
          <Route component={Error_404} />
        </Switch>
      </Container>
    );
  }
}
export default App;
