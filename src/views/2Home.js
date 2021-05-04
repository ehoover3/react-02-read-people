import React from "react";
import Carousel1 from "../components/2home/home";
import rightColumn from "../components/0rightColumn/1rightColumn";

function Home() {
  return (
    <>
      <div className="App_Thirty_vw"></div>
      <Carousel1 className="App_ThirtyFive_vw" />
      <rightColumn className="App_TwentyFive_vw" />
      <div className="App_Thirty_vw"></div>
    </>
  );
}

export default Home;
