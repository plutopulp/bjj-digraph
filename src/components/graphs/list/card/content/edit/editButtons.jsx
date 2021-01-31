import React from "react";
import { Popup, Button } from "semantic-ui-react";
import { useToggle } from "../../../../../../hooks";
import { HeaderWrapper } from "../../styles";
import DeleteModal from "./delete";

const EditButtons = ({ id, title }) => {
  const [deleteModal, toggleDeleteModal] = useToggle(false);
  return (
    <React.Fragment>
      <HeaderWrapper>
        <Popup
          trigger={<Button icon="edit" size="tiny" compact circular />}
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
      <DeleteModal
        title={title}
        id={id}
        open={deleteModal}
        handleClose={toggleDeleteModal}
      />
    </React.Fragment>
  );
};

export default EditButtons;
