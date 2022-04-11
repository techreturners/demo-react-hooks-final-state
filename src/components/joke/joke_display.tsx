import { useContext } from "react";
import JokeContext from "./joke_context";

const JokeDisplay: React.FC = () => {
  const joke = useContext(JokeContext);

  return (
    <>
      <div className="text-primary font-bold text-2xl">{joke.setup}</div>
      <div className="text-primary text-2xl">{joke.delivery}</div>
    </>
  );
};

export default JokeDisplay;
