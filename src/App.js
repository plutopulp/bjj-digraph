import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { Auth0Provider } from "@auth0/auth0-react";
import { HTML5Backend } from "react-dnd-html5-backend";
import "semantic-ui-css/semantic.min.css";

import Navbar from "./components/navbar/navbar";
import { GraphProvider } from "./contexts/graph";
import { GraphsProvider } from "./contexts/graphs";
import { routes } from "./lib/config/routes/routes";
import GraphCardList from "./components/graphs/list/list";
import GraphDetailView from "./components/graph/graphDetailView";
import Home from "./components/home/home";
import { APIController } from "./components/APIController";

const App = () => {
  return (
    <Auth0Provider
      clientId="cyQujWKqQOG385QEJadhgWps1kv3HHTI"
      domain="dev-3nvlzxev.eu.auth0.com"
      redirectUri={window.location.origin}
      audience="https://bjj-digraph-server"
      responseType="token id_token"
      scope="openid profile email"
      useRefreshTokens={true}
    >
      <Router>
        <DndProvider backend={HTML5Backend}>
          <GraphsProvider>
            <GraphProvider>
              <Navbar />
              <APIController />
              <Route exact path={routes.pages.home} component={Home} />
              <Route
                exact
                path={routes.pages.graphs.list}
                component={GraphCardList}
              />
              <Route
                exact
                path={routes.pages.graphs.detail(":graphId")}
                component={GraphDetailView}
              />
            </GraphProvider>
          </GraphsProvider>
        </DndProvider>
      </Router>
    </Auth0Provider>
  );
};

export default App;
