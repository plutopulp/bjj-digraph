import React from "react";
import "semantic-ui-css/semantic.min.css";

import { Graph } from "./components/graph";
import { GraphProvider } from "./contexts/graphContext";
import { GraphOpsProvider } from "./contexts/graphOpsContext";

const App = () => {
  return (
    <GraphProvider>
      <GraphOpsProvider>
        <Graph />{" "}
      </GraphOpsProvider>
    </GraphProvider>
  );
};

export default App;
