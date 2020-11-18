import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Axios from "axios";

export const useAPI = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = React.useState(null);

  // On mount, load the access token
  React.useEffect(() => {
    async function initializeAPI() {
      try {
        setToken(await getAccessTokenSilently());
      } catch (error) {
        console.log(error);
      }
    }
    initializeAPI();
  }, []);

  // Loads all the initial data of a resource type into state
  const list = (endpoint, callback) => {
    Axios.get(endpoint, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => callback(response.data))
      .catch((error) => console.log(error));
  };
  // Creates an instance of a resource type
  const create = (endpoint, instance, callback) => {
    Axios.post(endpoint, instance, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  // Updates an instance of a resource type
  const update = (endpoint, instance, callback) => {
    Axios.patch(endpoint, instance, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  // Deletes an instance of a resource type
  const destroy = (endpoint, callback) => {
    Axios.delete(endpoint, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return { token, list, create, update, destroy };
};
