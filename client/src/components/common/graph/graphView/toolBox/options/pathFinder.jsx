import React from "react";
import { Button, Icon, Popup, Menu, Dropdown } from "semantic-ui-react";

import { GraphContext } from "../../../../../../contexts/graph/graph";
import { usePathFinder } from "../../../../../../hooks";

// Toolbox option for obtaining all the connecting paths
// between 2 nodes and selecting which one to highlight
// in the graph
const PathFinder = () => {
  const { multiSelect, paths, setShowPathIndex } = React.useContext(
    GraphContext
  );
  const { handleConnectingPaths } = usePathFinder();
  const [dropdownOptions, setDropdownOptions] = React.useState([]);

  const canGetConnectingPaths = () => multiSelect.length === 2;
  const handlePathIndexChange = (event, { value }) => {
    setShowPathIndex(value);
  };

  React.useEffect(() => {
    const newOptions = paths.map((path, i) => ({
      key: i,
      text: `Path ${i + 1}`,
      value: i,
    }));
    setDropdownOptions(newOptions);
  }, [JSON.stringify(paths)]);

  return paths.length === 0 ? (
    <Popup
      trigger={
        <Button
          icon
          compact
          onClick={handleConnectingPaths}
          disabled={!canGetConnectingPaths()}
          style={{ marginLeft: "15px" }}
        >
          <Icon name="code branch" />
        </Button>
      }
      content={
        !canGetConnectingPaths() ? "Select 2 nodes" : "Find connecting paths"
      }
      position="bottom center"
    />
  ) : (
    <Popup
      trigger={
        <Menu compact icon style={{ marginLeft: "15px" }}>
          <Dropdown
            icon="code branch"
            button
            className="icon"
            options={dropdownOptions}
            onChange={handlePathIndexChange}
            defaultValue={0}
            labeled
          />
        </Menu>
      }
      content="Highlighted Path"
      position="right center"
    />
  );
};

export default PathFinder;
