import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Axios from "axios";

// A hook providing api request/handler methods
export const useAPI = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = React.useState(null);
  const headers = React.useRef(null);

  // On mount, load the access token
  React.useEffect(() => {
    async function loadToken() {
      try {
        setToken(await getAccessTokenSilently());
      } catch (error) {
        console.log(error);
      }
    }
    loadToken();
  }, [getAccessTokenSilently]);

  // When token loaded set request headers
  React.useEffect(() => {
    headers.current = {
      headers: { Authorization: `Bearer ${token}` },
    };
  }, [token]);

  // Loads initial data of a resource type into state
  // Could be list or item, just supply appropriate
  // endpoint and callback

  const read = (endpoint, callback) => {
    Axios.get(endpoint, headers.current)
      .then((response) => callback(response.data))
      .catch((error) => console.log(error));
  };
  // Creates an instance of a resource type
  const create = (endpoint, instance, callback) => {
    Axios.post(endpoint, instance, headers.current)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  // Updates an instance of a resource type
  const update = (endpoint, instance, callback) => {
    Axios.patch(endpoint, instance, headers.current)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  // Deletes an instance of a resource type
  const destroy = (endpoint, callback) => {
    Axios.delete(endpoint, headers.current)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return { token, read, create, update, destroy };
};
