import NodeEditor from "./editors/nodeEditor";
import withModalHOC from "../../../../../hocs/withModal";

const NodePanel = withModalHOC(NodeEditor);
export default NodePanel;
