import React from "react";
import _ from "lodash";
import { GraphView } from "react-digraph";
import styled from "styled-components";

import {
  graphConfig,
  NODE_KEY,
} from "../../../../lib/config/graph/graphConfig";
import NodePanel from "./panels/nodePanel";
import {
  useNodeDrop,
  useGraphOps,
  useRenderNode,
  useRenderNodeText,
  useWindowSize,
} from "../../../../hooks";
import { GraphContext } from "../../../../contexts/graph/graph";
import ToolBox from "./toolBox/toolBox";
import { NodeTypesContext } from "../../../../contexts/nodeTypes";

const { nodeSubtypes, edgeTypes } = graphConfig;

const GraphWrapper = styled.div`
  position: relative;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : 1000)}px;
`;
const DropZone = styled.div`
  width: 100%;
  height: 100%;
`;

const GraphViewContainer = ({
  nodes,
  edges,
  selected,
  doubleClicked,
  selectedNodes,
  selectedEdges,
  width,
  height,
  settings: {
    readOnly,
    showControls,
    showToolbox,
    layoutEngine,
    centerNodeOnMove,
    disableBackspace,
    gridDotSize,
    gridSpacing,
    maxZoom,
    minZoom,
  },
}) => {
  const {
    handleSelectNode,
    handleSelectEdge,
    handleSelect,
    handleResetDoubleClicked,
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
  const renderNode = useRenderNode();
  const renderNodeText = useRenderNodeText();
  const { multiSelect, paths, showPathIndex } = React.useContext(GraphContext);
  const { nodeTypes } = React.useContext(NodeTypesContext);
  const windowSize = useWindowSize();

  React.useEffect(() => graphRef.current.renderNodes(), [
    multiSelect,
    paths,
    showPathIndex,
  ]);
  return (
    <React.Fragment>
      <GraphWrapper
        ref={wrapperRef}
        width={width}
        // To do: replace 60 below by navbar height
        height={height ? height : windowSize.height - 60}
      >
        <DropZone ref={dropRef}>
          <ToolBox show={showToolbox} />
          <GraphView
            ref={graphRef}
            nodeKey={NODE_KEY}
            nodes={nodes}
            edges={edges}
            selected={selected}
            selectedNodes={selectedNodes}
            showHelp={true}
            selectedEdges={selectedEdges}
            nodeTypes={nodeTypes}
            nodeSubtypes={nodeSubtypes}
            edgeTypes={edgeTypes}
            showGraphControls={showControls}
            readOnly={readOnly}
            disableBackspace={disableBackspace}
            allowMultiselect={false}
            onSelectNode={handleSelectNode}
            onSelectEdge={handleSelectEdge}
            onSelect={handleSelect}
            onUpdateNode={handleUpdateNode}
            onCreateNode={handleCreateNode}
            onDeleteNode={handleDeleteNode}
            onCreateEdge={handleCreateEdge}
            onSwapEdge={handleSwapEdge}
            onDeleteEdge={handleDeleteEdge}
            onCopySelected={handleCopySelected}
            onPasteSelected={handlePasteSelected}
            renderNode={renderNode}
            renderNodeText={renderNodeText}
            layoutEngineType={layoutEngine}
            centerNodeOnMove={centerNodeOnMove}
            gridDotSize={gridDotSize}
            gridSpacing={gridSpacing}
            maxZoom={maxZoom}
            minZoom={minZoom}
          />
        </DropZone>
      </GraphWrapper>
      <NodePanel
        node={doubleClicked}
        open={!_.isEmpty(doubleClicked)}
        handleClose={handleResetDoubleClicked}
        size="small"
      />
    </React.Fragment>
  );
};

export default GraphViewContainer;
