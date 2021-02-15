import { formatDistance } from "date-fns";
import React from "react";
import { Card, Image } from "semantic-ui-react";
import withModalHOC from "../../hocs/withModal";
import { useAuth } from "../../hooks";

const Profile = () => {
  const { user } = useAuth();
  React.useEffect(() => console.log(user), [user]);
  return (
    <Card>
      <Image src={user.picture} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{user.nickname}</Card.Header>
        <Card.Meta>
          <div>
            Joined{" "}
            {formatDistance(new Date(user.updated_at), new Date(), {
              addSuffix: true,
            })}
          </div>
          );
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default withModalHOC(Profile);
