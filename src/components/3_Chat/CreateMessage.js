import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { fetch_createMessage } from "../../fetchRequests";
import {
  useStore,
  STORE_CREATE_MESSAGE,
  STORE_FLIP_HIDE_CREATE_MESSAGE,
} from "../../store/store";
import DropDown from "./DropDown.js";

function Chat(props) {
  const dispatch = useStore((state) => state.dispatch);
  const booleanHideCreateMessage = useStore(
    (state) => state.booleanHideCreateMessage
  );
  const user = useStore((state) => state.user);
  const [formData, setFormData] = useState({
    messageText: "",
  });

  const handleCreateMessage = (e) => {
    e.preventDefault();
    fetch_createMessage(user.token, formData.messageText)
      .then((message) => {
        dispatch({ type: STORE_CREATE_MESSAGE, payload: message });
      })
      .then(() =>
        dispatch({
          type: STORE_FLIP_HIDE_CREATE_MESSAGE,
          payload: !booleanHideCreateMessage,
        })
      );
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <div>
      <div className="CreateMessage_FirstLine">
        <div className="CreateMessage_DropDown">
          <DropDown />
        </div>
        <div>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              dispatch({
                type: STORE_FLIP_HIDE_CREATE_MESSAGE,
                payload: !booleanHideCreateMessage,
              });
            }}
          >
            CANCEL
          </Button>

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
    </div>
  );
}
export default Chat;
