import React from "react";
import IJoke from "./joke.interface";

const JokeContext = React.createContext<IJoke>({
  setup: "Default joke setup",
  delivery: "Default joke delivery",
});

export default JokeContext;
