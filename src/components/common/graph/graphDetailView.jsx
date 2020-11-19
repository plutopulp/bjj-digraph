import { compose } from "ramda";

import withGraphContextHOC from "../../../hocs/withGraphContextHOC";
import withAPIControllerHOC from "../../../hocs/withAPIController";
import StatelessGraphDetailView from "./statelessGraphDetailView";

const graphHOCs = compose(withGraphContextHOC, withAPIControllerHOC);
export default graphHOCs(StatelessGraphDetailView);
