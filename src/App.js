import React from "react";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";

import { Graph } from "./components/graph";
import { GraphProvider } from "./contexts/graphContext";
import { GraphOpsProvider } from "./contexts/graphOpsContext";
import { Palette } from "./components/palette/palette";

const AppWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const App = () => {
  return (
    <AppWrapper>
      <Palette />
      <GraphProvider>
        <GraphOpsProvider>
          <Graph />{" "}
        </GraphOpsProvider>
      </GraphProvider>
    </AppWrapper>
  );
};

export default App;
