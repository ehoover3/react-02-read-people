import React, { useState, useEffect } from "react";
import { useStore } from "../../store/store";
import { baseURL, fetch_getUser, fetch_setPicture } from "../../fetchRequests";
import { CameraFill } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

function Photo(props) {
  const authUser = useStore((state) => state.user);
  const [myUser, setMyUser] = useState({});
  const [about, setAbout] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [picture, setPicture] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch_getUser(authUser.username).then((data) => {
      setMyUser(data.user);
      setAbout(data.user.about);
      setDisplayName(data.user.displayName);
    });
  }, [props.match, count]);

  function handleSubmitPhoto(event) {
    setCount((count) => count + 1);
    console.log("handle submit photo");
    fetch_setPicture(
      authUser.token,
      authUser.username,
      picture
    ).then((response) => console.log(response));
  }

  return (
    <section>
      <div className="Photo_ImageContainer">
        <img className="Photo_Image" src={baseURL + myUser.pictureLocation} />
      </div>

      <div className="Photo_ImageButtons">
        <span>
          <input
            type="file"
            onChange={(event) => setPicture(event.target.files[0])}
          />

          {/* <Button variant="outline-primary" onClick={handleSubmitPhoto}>
            <CameraFill /> Update Photo
          </Button> */}
          <button onClick={handleSubmitPhoto}>
            <CameraFill /> Update Photo
          </button>
        </span>
      </div>
    </section>
  );
}

export default Photo;
