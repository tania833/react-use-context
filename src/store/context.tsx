import { Context, createContext, useState } from "react";

interface IContext {
  likes: number;
  increaseLikes: () => void;
  decreaseLikes: () => void;
}

const LikesContext: Context<IContext> = createContext<IContext>({
  likes: 0,
  increaseLikes: () => {},
  decreaseLikes: () => {},
});

export const LikesContextProvider = ({
  children,
}: React.PropsWithChildren<object>) => {
  const [likes, setLikes] = useState<number>(0);

  const increaseLikes = () => setLikes((prevState) => prevState + 1);
  const decreaseLikes = () => setLikes((prevState) => prevState - 1);

  const context = {
    likes,
    increaseLikes,
    decreaseLikes,
  };
  return (
    <LikesContext.Provider value={context}>{children}</LikesContext.Provider>
  );
};

export default LikesContext;
