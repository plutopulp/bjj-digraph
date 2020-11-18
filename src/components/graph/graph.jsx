import React from "react";
import { GraphView, Edge, Node, GraphUtils } from "react-digraph";
import styled from "styled-components";

import { graphConfig, NODE_KEY } from "../../lib/config/graph/graphConfig";
import { NodePanel, EdgePanel } from "../panels";
import { useNodeDrop, useGraphOps } from "../../hooks/index";
import NodeToolBox from "./nodeToolBox";
import renderNode from "./renderNode";
import renderNodeText from "./renderNodeText";

const { nodeTypes, nodeSubtypes, edgeTypes } = graphConfig;

const GraphWrapper = styled.div`
  width: ${({ width }) => (width ? width : "80%")};
  height: ${({ height }) => (height ? height : "1000px")};
`;
const DropZone = styled.div`
  width: 100%;
  height: 100%;
`;

export const Graph = ({
  nodes,
  edges,
  selected,
  width,
  height,
  showGraphControls,
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

  return (
    <GraphWrapper ref={wrapperRef} width={width} height={height}>
      <DropZone ref={dropRef}>
        <GraphView
          ref={graphRef}
          nodeKey={NODE_KEY}
          nodes={nodes}
          edges={edges}
          selected={selected}
          nodeTypes={nodeTypes}
          nodeSubtypes={nodeSubtypes}
          edgeTypes={edgeTypes}
          showGraphControls={showGraphControls}
          edgeHandleSize={100}
          readOnly={readOnly ? readOnly : false}
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
          renderNode={renderNode}
          renderNodeText={renderNodeText}
        />
        {selected && !selected.source && <NodePanel node={selected} />}
        {selected && selected.source && <EdgePanel edge={selected} />}
        {selected && !selected.source && <NodeToolBox selected={selected} />}
      </DropZone>
    </GraphWrapper>
  );
};
