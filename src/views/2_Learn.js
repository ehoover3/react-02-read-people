import React from "react";
import { ArrowUpCircle, Bricks } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar.js";

function Learn(props) {
  return (
    <div className="App_ColumnContainer">
      <div className="App_ColumnLeft">
        <div>
          <div className="Learn_Level1_Row1">
            <Link to="/2_Learn/Quiz" className="">
              <ArrowUpCircle className="Learn_ArrowUpCircle" />
            </Link>
          </div>
          <div className="Learn_Level1_Row2">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level1_Row3">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level1_Row4">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level1_Row5">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level1_Row6">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level1_Row7">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level1_Bricks">
            <Bricks className="Learn_Bricks" />
          </div>
          <div className="Learn_Level2_Row1">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level2_Row2">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level2_Row3">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level2_Row4">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level2_Row5">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level2_Row6">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level2_Row7">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level2_Row8">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level2_Row9">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level2_Row10">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level2_Row11">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level2_Row12">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level2_Row13">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level2_Row14">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level2_Row15">
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
            <ArrowUpCircle className="Learn_ArrowUpCircle" />
          </div>
          <div className="Learn_Level2_Bricks">
            <Bricks className="Learn_Bricks" />
          </div>
        </div>
      </div>
      <div className="App_ColumnRight">
        <SideBar />
      </div>
    </div>
  );
}

export default Learn;
