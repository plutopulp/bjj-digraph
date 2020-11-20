import withGraphContextHOC from "../../../../hocs/graphs/withContext";

import StatelessGraphView from "./stateless";

// A Graph detail view with context state. Basically a playground for non-authenticated users to
// mess around with.

const StatefullGraphView = withGraphContextHOC(StatelessGraphView);

export default StatefullGraphView;
