import React from "react";
import styled from "styled-components";
import { useScale, useTranslation } from "../../hooks";
import GraphTransformState from "../../lib/graph/transformState";

const Wrapper = styled.div`
  position: absolute;
  width: 10em;
  height: 5em;
  background: #eee;
  border-radius: 5px;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
`;
// Appears as a toolbox above the selected node
const NodeToolBox = ({ selected, graphRef, wrapperRef }) => {
  const scale = useScale(graphRef);
  const translation = useTranslation(graphRef);
  const [boxPosition, setBoxPosition] = React.useState([]);
  const transformManager = new GraphTransformState(graphRef, wrapperRef);
  React.useEffect(() => {
    setBoxPosition(transformManager.graphToClient([selected.x, selected.y]));
  }, [selected.x, selected.y, scale, translation]);

  //React.useEffect(() => setScale(transformManager.getScale()), [
  //  transformManager,
  //]);

  return (
    <Wrapper x={boxPosition[0]} y={boxPosition[1]}>
      ToolBox
    </Wrapper>
  );
};

export default NodeToolBox;
