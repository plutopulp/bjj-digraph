import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
    <DndProvider backend={HTML5Backend}>
      <AppWrapper>
        <Palette />
        <GraphProvider>
          <GraphOpsProvider>
            <Graph />{" "}
          </GraphOpsProvider>
        </GraphProvider>
      </AppWrapper>
    </DndProvider>
  );
};

export default App;
