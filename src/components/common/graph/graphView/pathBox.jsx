import React from "react";
import { v4 as uuid } from "uuid";

import { Button } from "semantic-ui-react";

import { GraphContext } from "../../../../contexts/graph";

// Interface for displaying a choosing which path
// to highlight out of the connecting paths
const PathBox = () => {
  const { paths, showPathIndex, setShowPathIndex } = React.useContext(
    GraphContext
  );

  React.useEffect(() => console.log(showPathIndex, paths[showPathIndex]), [
    showPathIndex,
  ]);
  return !paths.length ? null : (
    <div>
      Connecting paths:
      <Button.Group>
        {paths.map((path, i) => (
          <Button
            key={uuid()}
            circular
            onClick={() => setShowPathIndex(i)}
            size="tiny"
          >
            {i + 1}
          </Button>
        ))}
      </Button.Group>
    </div>
  );
};

export default PathBox;
