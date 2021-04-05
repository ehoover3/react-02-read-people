import React from "react";
import { Trash } from "react-bootstrap-icons";
import { useStore } from "../../store/store";
import {
  fetch_deleteMessage,
  fetch_addLike,
  fetch_removeLike,
} from "../../fetchRequests";

function Message(props) {
  const authUser = useStore((state) => state.user);
  const { id, username } = props;
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
  See what fetch requests are doing. 
  You have your store setup for ADDLIKE and UNLIKE but aren't using them here with a dispatch.
  Although we don't need the response information to render anything to the page, 
  having that 
  dipatch({type: ADDLIKE, payload: responseFromFetch})
  is really useful to debug.
  This also goes for deleteMessage down below
/////////////////////////////////////////////////////// --> */
  }
  function handleRemoveLike() {
    fetch_removeLike(authUser.token, likedId()).then(() => {
      props.getAllOfMessages();
    });
  }

  return (
    <div className="Message">
      <div className="Message_FirstLine">
        <div>
          {props.username}: {props.text}
        </div>

        <div>
          {props.username === authUser.username && (
            <button
              onClick={() =>
                fetch_deleteMessage(authUser.token, id).then(() => {
                  props.getAllOfMessages();
                })
              }
            >
              <Trash />
            </button>
          )}
          Likes: {props.likes} &nbsp;
          <button onClick={handleAddLike}>Like</button>
          <button onClick={handleRemoveLike}>Unlike</button>
        </div>
      </div>
      <div className="Message_SecondLine">
        <div> </div>
      </div>
    </div>
  );
}
export default Message;
