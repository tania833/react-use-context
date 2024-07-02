import { useContext } from "react";
import LikesContext from "../store/context";
import { NavLink } from "react-router-dom";

export const SecondPage = () => {
  const likes = useContext(LikesContext);
  return (
    <div>
      <h1>Second Page: {likes.likes}</h1>
      <button onClick={likes.increaseLikes}>Increase Likes</button>
      <NavLink to="/main">Go to the Main Page</NavLink>
    </div>
  );
};
