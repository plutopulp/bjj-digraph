import React from "react";
import _ from "lodash";
import { GraphView } from "react-digraph";
import styled from "styled-components";

import {
  graphConfig,
  NODE_KEY,
} from "../../../../lib/config/graph/graphConfig";
import { NodePanel, EdgePanel } from "../../../panels";
import {
  useNodeDrop,
  useGraphOps,
  useScale,
  useTranslation,
  useNodeShape,
} from "../../../../hooks";
import NodeToolBox from "./nodeToolBox";
import renderNode from "./renderNode";
import renderNodeText from "./renderNodeText";
import { GraphContext } from "../../../../contexts/graph";
import ToolBox from "./graphToolBox";
import { NodeTypesContext } from "../../../../contexts/nodeTypes";

const { nodeSubtypes, edgeTypes } = graphConfig;

const GraphWrapper = styled.div`
  position: relative;
  width: ${({ width }) => (width ? width : "80%")};
  height: ${({ height }) => (height ? height : "1000px")};
`;
const DropZone = styled.div`
  width: 100%;
  height: 100%;
`;

const GraphViewContainer = ({
  nodes,
  edges,
  selected,
  width,
  height,
  showControls,
  readOnly,
}) => {
  const {
    handleSelectNode,
    handleSelectEdge,
    handleCreateNode,
    handleUpdateNode,
    handleDeleteNode,
    handleCreateEdge,
    handleSwapEdge,
    handleDeleteEdge,
    handleCopySelected,
    handlePasteSelected,
  } = useGraphOps();
  const graphRef = React.useRef();
  const wrapperRef = React.useRef();
  const dropRef = useNodeDrop(graphRef, wrapperRef);
  const scale = useScale(graphRef);
  const translation = useTranslation(graphRef);
  const getNodeShape = useNodeShape();
  const { multiSelect, paths } = React.useContext(GraphContext);
  const { nodeTypes } = React.useContext(NodeTypesContext);

  const [showToolBox, setShowToolBox] = React.useState(false);

  React.useEffect(() => {
    setShowToolBox(false);
    setTimeout(() => setShowToolBox(true), 600);
  }, [scale, JSON.stringify(translation)]);

  React.useEffect(() => graphRef.current.renderNodes(), [multiSelect, paths]);

  const handleRenderNode = (ref, node, id, selected, hovered) => {
    console.log(node);
    const nodeShape = getNodeShape(node);
    return renderNode(nodeShape);
  };
  return (
    <GraphWrapper ref={wrapperRef} width={width} height={height}>
      <DropZone ref={dropRef}>
        <ToolBox />
        <GraphView
          ref={graphRef}
          nodeKey={NODE_KEY}
          nodes={nodes}
          edges={edges}
          selected={selected}
          nodeTypes={nodeTypes}
          nodeSubtypes={nodeSubtypes}
          edgeTypes={edgeTypes}
          showGraphControls={showControls}
          readOnly={readOnly ? readOnly : false}
          disableBackspace={true}
          onSelectNode={handleSelectNode}
          onUpdateNode={handleUpdateNode}
          onCreateNode={handleCreateNode}
          onDeleteNode={handleDeleteNode}
          onSelectEdge={handleSelectEdge}
          onCreateEdge={handleCreateEdge}
          onSwapEdge={handleSwapEdge}
          onDeleteEdge={handleDeleteEdge}
          onCopySelected={handleCopySelected}
          onPasteSelected={handlePasteSelected}
          renderNode={handleRenderNode}
          renderNodeText={(data) => renderNodeText(data, nodeTypes)}
        />
        {selected && !selected.source && <NodePanel node={selected} />}
        {selected && selected.source && <EdgePanel edge={selected} />}
        {!_.isEmpty(selected) && showToolBox && !selected.source && (
          <NodeToolBox
            selected={selected}
            graphRef={graphRef}
            wrapperRef={wrapperRef}
            scale={scale}
            translation={translation}
          />
        )}
      </DropZone>
    </GraphWrapper>
  );
};

export default GraphViewContainer;
