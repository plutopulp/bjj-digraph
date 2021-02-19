import React from "react";
import { Popup, Button } from "semantic-ui-react";
import withModalHOC from "../../../../../../../hocs/withModal";
import { useToggle } from "../../../../../../../hooks";
import { HeaderWrapper } from "../../styles";
import DeleteGraph from "./delete";
import EditGraph from "./edit";

const EditGraphModal = withModalHOC(EditGraph);
const DeleteGraphModal = withModalHOC(DeleteGraph);

const ModifyGraph = ({ id, title }) => {
  const [deleteModal, toggleDeleteModal] = useToggle(false);
  const [editModal, toggleEditModal] = useToggle(false);
  React.useEffect(() => console.log(editModal), [editModal]);
  return (
    <React.Fragment>
      <HeaderWrapper>
        <Popup
          trigger={
            <Button
              icon="edit"
              size="tiny"
              compact
              circular
              onClick={toggleEditModal}
            />
          }
          content="Edit Map"
        />
        <Popup
          trigger={
            <Button
              icon="trash"
              size="tiny"
              compact
              circular
              negative
              onClick={toggleDeleteModal}
            />
          }
          content="Delete Map"
        />
      </HeaderWrapper>
      <DeleteGraphModal
        title={title}
        id={id}
        open={deleteModal}
        handleClose={toggleDeleteModal}
        size="small"
      />
      <EditGraphModal
        id={id}
        open={editModal}
        handleClose={toggleEditModal}
        size="small"
      />
    </React.Fragment>
  );
};

export default ModifyGraph;
