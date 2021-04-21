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
  const [picture, setPicture] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch_getUser(authUser.username).then((data) => {
      setMyUser(data.username);
      setAbout(data.about);
      setDisplayName(data.displayName);
    });
  }, [props.match, count]);

  function handleSubmitPhoto(event) {
    setCount((count) => count + 1);
    fetch_setPicture(
      authUser.username,
      picture,
      authUser.token,
    ).then((response) => console.log(response));
  }

  return (
    <section>
      <div className="Photo_ImageContainer">
        <img className="Photo_Image" src={baseURL + authUser.pictureLocation} />
      </div>

      <div className="Photo_ImageButtons">
        <span>
          <input
            className="Photo_InputButton"
            type="file"
            accept=".jpeg, .png, .jpg"
            onChange={(event) => setPicture(event.target.files[0])}
          />

          <button className="btn btn-primary" onClick={handleSubmitPhoto}>
            <CameraFill /> Update Photo
          </button>
        </span>
        {/* <Button variant="outline-primary" onClick={handleSubmitPhoto}>
            <CameraFill /> Update Photo
          </Button> */}
      </div>
    </section>
  );
}

export default Photo;
