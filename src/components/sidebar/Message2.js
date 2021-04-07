import React from "react";
import { Trash, HandThumbsUp, HandThumbsDown } from "react-bootstrap-icons";
import { useStore } from "../../store/store";
import {
  fetch_deleteMessage,
  fetch_addLike,
  fetch_removeLike,
} from "../../fetchRequests";

function Message2(props) {
  const authUser = useStore((state) => state.user);
  const { id } = props;
  const { likeArray } = props || [];

  const likedId = (props) => {
    const likeId = likeArray.filter(
      (like) => authUser.username === like.username
    );

    if (likeId.length === 1) {
      return likeId[0].id;
    }
    return null;
  };

  function handleAddLike() {
    fetch_addLike(authUser.token, id).then(() => {
      props.getAllOfMessages();
    });
  }
  {
    /* <!-- //////////////////////////////////////////////////
dispatch add like to the store
dispatch remove like to the store
    dipatch({type: ADDLIKE, payload: responseFromFetch})
/////////////////////////////////////////////////////// --> */
  }
  function handleRemoveLike() {
    fetch_removeLike(authUser.token, likedId()).then(() => {
      props.getAllOfMessages();
    });
  }

  return (
    <div className="TopMessages_MessageContainer">
      <div className="TopMessages_Bold">{props.username}</div>
      <div className="TopMessage_Center">{props.text}</div>
      <div className="TopMessage_Center">
        <button className="Message_Button" onClick={handleAddLike}>
          <HandThumbsUp />
        </button>
        {props.likes}
        <button className="Message_Button" onClick={handleRemoveLike}>
          <HandThumbsDown />
        </button>
      </div>
    </div>
  );
}
export default Message2;
