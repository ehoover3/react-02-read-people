import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";

function DropDown(props) {
  const [dropDownText, setDropDownText] = useState("CHATROOM 1");
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          CHOOSE ROOM OR USER
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            href="#/action-1"
            onClick={() => setDropDownText("CHATROOM 1")}
          >
            CHATROOM 1
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-2"
            onClick={() => setDropDownText("CHATROOM 2")}
          >
            CHATROOM 2
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-3"
            onClick={() => setDropDownText("CHATROOM 3")}
          >
            CHATROOM 3
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            href="#/action-3"
            onClick={() => setDropDownText("FRIEND 1")}
          >
            FRIEND 1
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-3"
            onClick={() => setDropDownText("FRIEND 2")}
          >
            FRIEND 2
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-3"
            onClick={() => setDropDownText("FRIEND 3")}
          >
            FRIEND 3
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-3"
            onClick={() => setDropDownText("FRIEND 4")}
          >
            FRIEND 4
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-3"
            onClick={() => setDropDownText("FRIEND 5")}
          >
            FRIEND 5
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button variant="light" disabled>
        {dropDownText}
      </Button>
    </>
  );
}
export default DropDown;
