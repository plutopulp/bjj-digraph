import { compose } from "ramda";

import withGraphContextHOC from "../../../../hocs/graphs/withContext";
import withPaletteHOC from "../../../../hocs/graphs/withPalette";
import withSettingsHOC from "../../../../hocs/graphs/withSettings";
import StatelessGraphView from "./stateless";

// A Graph detail view with palette, context state and settings.
// Basically a playground for non-authenticated users to
// mess around with.

const statefullHOCs = compose(
  withPaletteHOC,
  withGraphContextHOC,
  withSettingsHOC
);
const StatefullGraphView = statefullHOCs(StatelessGraphView);

export default StatefullGraphView;
