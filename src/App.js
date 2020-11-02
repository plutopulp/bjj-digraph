import React from "react";
import "semantic-ui-css/semantic.min.css";

import { Graph } from "./components/graph";
import { GraphProvider } from "./contexts/graphContext";

const App = () => {
  return (
    <GraphProvider>
      <Graph />{" "}
    </GraphProvider>
  );
};

export default App;
