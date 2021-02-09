import { compose } from "ramda";

import withGraphContextHOC from "../../../../hocs/graphs/withContext";
import withSettingsHOC from "../../../../hocs/graphs/withSettings";
import StatelessGraphView from "./stateless";

// A Graph detail view with context state and settings.
// Basically a playground for non-authenticated users to
// mess around with.

const statefullHOCs = compose(withGraphContextHOC, withSettingsHOC);
const StatefullGraphView = statefullHOCs(StatelessGraphView);

export default StatefullGraphView;
