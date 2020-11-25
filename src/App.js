import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Max" animal="Dog" breed="Hound" />
      <Pet name="Sunshine" animal="Bird" breed="Parrot" />
      <Pet name="Louie" animal="Rabbit" breed="Belgian Hare" /> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));
