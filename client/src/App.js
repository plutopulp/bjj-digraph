import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { Auth0Provider } from "@auth0/auth0-react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { RefProvider } from "react-context-refs";

import "semantic-ui-css/semantic.min.css";

import { GraphProvider } from "./contexts/graph/graph";
import { GraphsProvider } from "./contexts/graphs";
import { routes } from "./lib/config/routes/routes";
import GraphCardList from "./components/graphs/list/list";
import AuthenticatedGraphView from "./components/common/graph/detailViews/authenticated";
import Home from "./components/home/home";
import { APIController } from "./components/APIController";
import { SettingsProvider } from "./contexts/graph/settings";
import { NodeTypesProvider } from "./contexts/nodeTypes";

const App = () => {
  return (
    <Auth0Provider
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      redirectUri={process.env.REACT_APP_SITE_URL}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      responseType="token id_token"
      scope="openid profile email"
      useRefreshTokens={true}
    >
      <Router>
        <RefProvider>
          <DndProvider backend={HTML5Backend}>
            <GraphsProvider>
              <GraphProvider>
                <NodeTypesProvider>
                  <SettingsProvider>
                    <APIController />
                    <Route exact path={routes.pages.home} component={Home} />
                    <Route
                      exact
                      path={routes.pages.graphs.list}
                      component={GraphCardList}
                    />
                    <Route
                      exact
                      path={routes.pages.graphs.detail(":slug")}
                      component={AuthenticatedGraphView}
                    />
                  </SettingsProvider>
                </NodeTypesProvider>
              </GraphProvider>
            </GraphsProvider>
          </DndProvider>
        </RefProvider>
      </Router>
    </Auth0Provider>
  );
};

export default App;
