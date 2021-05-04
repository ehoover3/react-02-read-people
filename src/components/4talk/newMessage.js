import React, { useState } from "react";
import { fetch_createMessage } from "../../fetchRequests";
import {
  useStore,
  STORE_CREATE_MESSAGE,
  STORE_TOGGLE_NEW_MESSAGE,
} from "../../store/store";
import { Button } from "react-bootstrap";

function NewMessage() {
  const dispatch = useStore((state) => state.dispatch);
  const toggleNewMessage = useStore((state) => state.toggleNewMessage);
  const user = useStore((state) => state.user);
  const [formData, setFormData] = useState({
    messageText: "",
    username: user.username,
  });

  const handleCreateMessage = (e) => {
    e.preventDefault();
    fetch_createMessage(user.token, formData.messageText, formData.username)
      .then((message) => {
        dispatch({ type: STORE_CREATE_MESSAGE, payload: message });
      })
      .then(() =>
        dispatch({
          type: STORE_TOGGLE_NEW_MESSAGE,
          payload: !toggleNewMessage,
        })
      );
  };
  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <>
      <div className="CreateMessage_FirstLine">
        <div className="CreateMessage_DropDown">
          {/* DROP DOWN BUTTON */}
          {/* <Dropdown>
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
          </Dropdown> */}
          {/* SHOW DROPDOWN TEXT */}
          {/* <Button variant="light" disabled>
            {dropDownText}
          </Button> */}
        </div>

        <div>
          {/* CANCEL BUTTON */}
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              dispatch({
                type: STORE_TOGGLE_NEW_MESSAGE,
                payload: !toggleNewMessage,
              });
            }}
          >
            CANCEL
          </Button>

          {/* POST MESSAGE BUTTON */}
          <Button variant="success" onClick={handleCreateMessage}>
            POST MESSAGE
          </Button>
        </div>
      </div>
      <textarea
        className="CreateMessage_Input"
        type="text"
        name="messageText"
        value={formData.messageText}
        autoFocus
        required
        placeholder="Create new message here"
        onChange={handleChange}
      />
    </>
  );
}
export default NewMessage;
