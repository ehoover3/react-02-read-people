import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useStore } from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
//VIEWS
import LoginPage from "./views/0_LoginPage";
import NewProfile from "./components/0_LoginPage/NewProfile";
import Navigation from "./components/Navigation/Navigation";
import SideBar from "./components/Sidebar/SideBar.js";
import Home from "./views/1_Home";
import Learn from "./views/2_Learn";
import Chat from "./views/3_Chat";
import Play from "./views/5_Play";
import User from "./views/6_User";
import NotFound from "./views/5_NotFound";
import Quiz from "./components/2_Learn/Quiz";

function App() {
  const user = useStore((state) => state.user);
  const openSidebar = useStore((state) => state.openSidebar);

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
        <SideBar />
        {/* {openSidebar ? <SideBar /> : <SideBar />} */}
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Learn" component={Learn} />
          <Route exact path="/2_Learn/Quiz" component={Quiz} />
          <Route exact path="/Chat" component={Chat} />
          <Route exact path="/User" component={User} />
          <Route exact path="/Play" component={Play} />
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/Feeds" component={Feed} /> */}
          <Route component={NotFound} />
        </Switch>
      </Container>
    );
  }
}
export default App;
