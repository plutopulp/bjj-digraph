import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { GraphsContext } from "../../../../../../contexts/graphs";

import withModalHOC from "../../../../../../hocs/withModal";
import { toTitle } from "../../../../../../lib/utils/strings";

const DeleteGraph = ({ title, id, handleClose }) => {
  const { graphs, setGraphs } = React.useContext(GraphsContext);

  const handleDelete = () => {
    const newGraphs = graphs.filter((graph) => graph.id !== id);
    setGraphs(newGraphs);
  };
  return (
    <React.Fragment>
      <Modal.Header>Delete Map</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to delete the map "{toTitle(title)}" ?</p>
        <p>This action can not be undone!</p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleClose} icon="remove" content="No" />
        <Button
          onClick={handleDelete}
          negative
          icon="checkmark"
          content="Yes, delete!"
        />
      </Modal.Actions>
    </React.Fragment>
  );
};
export default DeleteGraph;
