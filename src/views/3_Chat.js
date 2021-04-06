import React, { useState, useEffect } from "react";
import SideBar from "../components/sidebar/SideBar.js";
import CreateMessage from "../components/3_Chat/CreateMessage";
import MessageList from "../components/3_Chat/MessageList";
import { useStore, STORE_CREATE_MESSAGE } from "../store/store";
import { fetch_createMessage } from "../fetchRequests";
import { Dropdown } from "react-bootstrap";

function Chat(props) {
  const [isNewMessageHidden, setIsNewMessageHidden] = useState(true);
  const [chatRoom, setChatRoom] = useState(1);
  const dispatch = useStore((state) => state.dispatch);
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
      .then(() => setIsNewMessageHidden(!isNewMessageHidden));
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <div className="App_ColumnContainer">
      <div className="App_ColumnLeft">
        <div>
          {isNewMessageHidden ? (
            <div>
              <div className="Chat_SpaceVertical"></div>

              <div className="Chat_Firstline_A">
                <button
                  type="submit"
                  className="CreateMessage_NewPost"
                  onClick={() => {
                    setIsNewMessageHidden(!isNewMessageHidden);
                  }}
                >
                  CREATE MESSAGE
                </button>

                <div className="Chat_SpaceVertical"></div>
              </div>
              <MessageList />
            </div>
          ) : (
            <div>
              <div className="Chat_SpaceVertical"></div>

              <div className="Chat_FirstLine_B">
                <div>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  Chat Room {chatRoom}
                </div>
                <div>
                  <button
                    type="submit"
                    className="CreateMessage_Cancel"
                    onClick={() => {
                      setIsNewMessageHidden(!isNewMessageHidden);
                    }}
                  >
                    CANCEL
                  </button>

                  <button
                    onClick={handleCreateMessage}
                    className="CreateMessage_NewPost"
                  >
                    POST MESSAGE
                  </button>
                </div>
              </div>

              <div className="Chat_SpaceVertical"></div>

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

              {/* <CreateMessage /> */}
            </div>
          )}
        </div>
      </div>
      <div className="App_ColumnRight">
        <SideBar />
      </div>
    </div>
  );
}
export default Chat;
