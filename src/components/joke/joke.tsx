import { useEffect, useState } from "react";
import LoadingIndicator from "../shared/loading_indicator";
import IJoke from "./joke.interface";
import JokeContext from "./joke_context";
import JokeDisplay from "./joke_display";
import loadJoke from "./load_joke";

const Joke: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [joke, setJoke] = useState<IJoke>();

  const shouldLoad = joke === undefined && !loading;

  useEffect(() => {
    const performFetch = async () => {
      if (loading) return;
      setLoading(true);
      const loadedJoke = await loadJoke();
      setJoke(loadedJoke);
      setLoading(false);
    };
    if (shouldLoad) {
      performFetch();
    }
  }, [shouldLoad, loading]);

  return (
    <article className="mt-3 text-center">
      {loading && <LoadingIndicator />}
      {!loading && joke && (
        <JokeContext.Provider value={joke}>
          <JokeDisplay />
        </JokeContext.Provider>
      )}
      {!loading && (
        <button
          className="button mt-6 p-3 bg-success text-white"
          onClick={() => setJoke(undefined)}
        >
          New Joke!
        </button>
      )}
    </article>
  );
};

export default Joke;
