import React from "react";
import { Trash, HandThumbsUp, HandThumbsDown } from "react-bootstrap-icons";
import { useStore } from "../../store/store";
import {
  fetch_deleteMessage,
  fetch_addLike,
  fetch_removeLike,
} from "../../fetchRequests";

function Message1(props) {
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
    <div>
      <p></p>
      <div className="Message">
        {/* LEFT SIDE OF THE LINE */}
        <div>
          <span className="Message_Bold">{props.username} </span>
          <span>{props.text}</span>
        </div>

        {/* RIGHT SIDE OF THE LINE */}
        <div>
          {props.username === authUser.username && (
            <button
              className="Message_Button"
              onClick={() =>
                fetch_deleteMessage(authUser.token, id).then(() => {
                  props.getAllOfMessages();
                })
              }
            >
              <Trash />
            </button>
          )}
          <button className="Message_Button" onClick={handleAddLike}>
            <HandThumbsUp />
          </button>
          {props.likes}
          <button className="Message_Button" onClick={handleRemoveLike}>
            <HandThumbsDown />
          </button>
          <p></p>
        </div>
      </div>
    </div>
  );
}
export default Message1;
