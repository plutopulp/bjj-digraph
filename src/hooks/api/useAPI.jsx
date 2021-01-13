import React from "react";
import Axios from "axios";
import { useAuthAPI } from "./useAuthAPI";

// A hook providing api request/handler methods
export const useAPI = () => {
  const { token } = useAuthAPI();
  const headers = React.useRef(null);

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
