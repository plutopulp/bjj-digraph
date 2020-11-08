import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";

import { Graph } from "./components/graph";
import { GraphProvider } from "./contexts/graph";
import { Palette } from "./components/palette/palette";
import { APIController } from "./components/APIController";

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
          <APIController />
          <Graph />{" "}
        </GraphProvider>
      </AppWrapper>
    </DndProvider>
  );
};

export default App;
