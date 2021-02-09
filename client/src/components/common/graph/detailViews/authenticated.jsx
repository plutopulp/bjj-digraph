import { compose } from "ramda";

import withGraphContextHOC from "../../../../hocs/graphs/withContext";
import withAPIControllerHOC from "../../../../hocs/graphs/withAPIController";
import StatelessGraphView from "./stateless";
import withSettingsHOC from "../../../../hocs/graphs/withSettings";
import withPaletteHOC from "../../../../hocs/graphs/withPalette";

// A Graph detail view for authenticated users, hooked up
// to context, settings and api controllers
const authGraphHOCs = compose(
  withPaletteHOC,
  withGraphContextHOC,
  withSettingsHOC,
  withAPIControllerHOC
);
const AuthenticatedGraphView = authGraphHOCs(StatelessGraphView);

export default AuthenticatedGraphView;
