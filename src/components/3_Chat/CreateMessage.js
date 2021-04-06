import React, { useState } from "react";
import { fetch_createMessage } from "../../fetchRequests";
import { useStore, STORE_CREATE_MESSAGE } from "../../store/store";

function CreateMessage(props) {
  const dispatch = useStore((state) => state.dispatch);
  const user = useStore((state) => state.user);
  const [formData, setFormData] = useState({
    messageText: "",
  });

  const handleCreateMessage = (e) => {
    e.preventDefault();
    fetch_createMessage(user.token, formData.messageText).then((message) => {
      dispatch({ type: STORE_CREATE_MESSAGE, payload: message });
    });
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <form id="createMessage" onSubmit={handleCreateMessage}>
      <button type="submit" className="CreateMessage_NewPost">
        POST MESSAGE
      </button>
      <input
        className="CreateMessage_Input"
        type="text"
        name="messageText"
        value={formData.messageText}
        autoFocus
        required
        placeholder="Create new message here"
        onChange={handleChange}
      />
    </form>
  );
}
export default CreateMessage;
