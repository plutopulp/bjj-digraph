import { compose } from "ramda";

import withGraphContextHOC from "../../../../hocs/graphs/withContext";
import withAPIControllerHOC from "../../../../hocs/graphs/withAPIController";
import StatelessGraphView from "./stateless";

// A Graph detail view for authenticated users, hooked up
// to context and api controllers
const authGraphHOCs = compose(withGraphContextHOC, withAPIControllerHOC);
const AuthenticatedGraphView = authGraphHOCs(StatelessGraphView);

export default AuthenticatedGraphView;
