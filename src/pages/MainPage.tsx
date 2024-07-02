import { useContext } from "react";
import LikesContext from "../store/context";
import { NavLink } from "react-router-dom";

export const MainPage = () => {
  const likes = useContext(LikesContext);
  return (
    <div>
      <h1>Main Page: {likes.likes}</h1>
      <button onClick={likes.decreaseLikes}>Decrease Likes</button>

      <NavLink to="/second">Go to the Second Page</NavLink>
    </div>
  );
};
