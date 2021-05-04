import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useStore } from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
//VIEWS
import LoginPage from "./views/1login";
import NewUser from "./components/1login/2newUser";
import Navigation from "./components/0navbar/1navbar";
import Error_404 from "./views/0error";
import Home from "./views/2home";
import Grow from "./views/3grow";
import Talk from "./views/4talk";
import Play from "./views/5play";
import User from "./views/6user";
//GROW - SUBSECTIONS
import Quiz1 from "./components/3grow/quizzes/quiz1";
import Quiz2 from "./components/3grow/quizzes/quiz2";
import Quiz3 from "./components/3grow/quizzes/quiz3";
import Video from "./components/3grow/video";
import Video2 from "./components/3grow/videos/video2";
import Video3 from "./components/3grow/videos/video3";
import Video4 from "./components/3grow/videos/video4";
import Video5 from "./components/3grow/videos/video5";
import Video6 from "./components/3grow/videos/video6";
import Video7 from "./components/3grow/videos/video7";
import Video8 from "./components/3grow/videos/video8";
import Video9 from "./components/3grow/videos/video9";
import Video10 from "./components/3grow/videos/video10";
import Video11 from "./components/3grow/videos/video11";
import Video12 from "./components/3grow/videos/video12";
import Video13 from "./components/3grow/videos/video13";
import Video14 from "./components/3grow/videos/video14";
import Video15 from "./components/3grow/videos/video15";
import Video16 from "./components/3grow/videos/video16";
import Video17 from "./components/3grow/videos/video17";
import Video18 from "./components/3grow/videos/video18";
import Video19 from "./components/3grow/videos/video19";
import Video20 from "./components/3grow/videos/video20";
import Video21 from "./components/3grow/videos/video21";
import Video22 from "./components/3grow/videos/video22";
import Video23 from "./components/3grow/videos/video23";
import Video24 from "./components/3grow/videos/video24";
import Video25 from "./components/3grow/videos/video25";
import Video26 from "./components/3grow/videos/video26";
import Video27 from "./components/3grow/videos/video27";
import Video28 from "./components/3grow/videos/video28";
import Video29 from "./components/3grow/videos/video29";
import Video30 from "./components/3grow/videos/video30";
import Video31 from "./components/3grow/videos/video31";
import Video32 from "./components/3grow/videos/video32";
import Video33 from "./components/3grow/videos/video33";
import Video34 from "./components/3grow/videos/video34";
import Video35 from "./components/3grow/videos/video35";

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
        <Route exact path="/Grow/Quiz1" component={Quiz1} />
        <Route exact path="/Grow/Quiz2" component={Quiz2} />
        <Route exact path="/Grow/Quiz3" component={Quiz3} />
        <Route exact path="/Grow/Video" component={Video} />
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

export default App;
