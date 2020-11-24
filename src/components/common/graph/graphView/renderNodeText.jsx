import styled from "styled-components";
import { Node } from "react-digraph";

import { nodeTypes } from "../../../../lib/config/types/nodeTypes";
import { getNodeSize } from "../../../../lib/utils/graph";

const NodeContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.35em;
  font-weight: 650;
  font-style: oblique;
  color: #111;
  padding: 1em;
`;

const renderNodeText = (data) => {
  const xlinkHref = Node.getNodeTypeXlinkHref(data, nodeTypes) || "";
  const { width, height } = getNodeSize(xlinkHref);
  return (
    <foreignObject x={-width / 2} y={-height / 2} width={width} height={height}>
      <NodeContentWrapper>
        <span>{data.title} </span>
      </NodeContentWrapper>
    </foreignObject>
  );
};

export default renderNodeText;
