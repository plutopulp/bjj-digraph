import React from "react";
import { DndProvider } from "react-dnd";
import { Auth0Provider } from "@auth0/auth0-react";
import { HTML5Backend } from "react-dnd-html5-backend";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";

import Navbar from "./components/navbar/navbar";
import Profile from "./components/auth/profile";
import { Graph } from "./components/graph/graph";
import { GraphProvider } from "./contexts/graph";
import { GraphsProvider } from "./contexts/graphs";
import { Palette } from "./components/palette/palette";
import { APIController } from "./components/APIController";

const AppWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const App = () => {
  return (
    <Auth0Provider
      clientId="cyQujWKqQOG385QEJadhgWps1kv3HHTI"
      domain="dev-3nvlzxev.eu.auth0.com"
      redirectUri={window.location.origin}
      audience="https://bjj-digraph-server"
      responseType="token id_token"
      scope="openid profile email"
    >
      <DndProvider backend={HTML5Backend}>
        <GraphsProvider>
          <Navbar />
          <AppWrapper>
            <Palette />

            <GraphProvider>
              <APIController />
              <Profile />
              <Graph />{" "}
            </GraphProvider>
          </AppWrapper>
        </GraphsProvider>
      </DndProvider>
    </Auth0Provider>
  );
};

export default App;
