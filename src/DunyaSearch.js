import { Link } from "react-router-dom";

import { useEffect } from "react";
// import { LOGIN, useStore } from "../store/store";

const Navbar = () => {
  const dispatch = useStore((state) => state.dispatch);

  function handleMessage(event) {
    console.log(event);
    dispatch({ type: LOGIN, payload: event.data });
  }
  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  function handleArticlesearch(e) {
    window.open("");
  }
  return (
    <>
      <div>
        <div id="Search">
          <Link to="/Feeds">Search Articles</Link>
        </div>
        {/* <button onClick={handleArticlesSearch}>Search</button> */}
      </div>
    </>
  );
};

export default Navbar;
