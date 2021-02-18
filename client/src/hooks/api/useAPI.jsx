import React from "react";
import Axios from "axios";
import { useAuth } from "./useAuth";

// A hook providing api request/handler methods
export const useAPI = () => {
  const { token, headers } = useAuth();

  // Loads initial data of a resource type into state
  // Could be list or item, just supply appropriate
  // endpoint and callback
  const read = (endpoint, setState, setLoaded) => {
    Axios.get(endpoint, headers.current)
      .then((response) => setState(response.data))
      .then(() => setLoaded(true))
      .catch((error) => console.log(error));
  };

  // Creates an instance of a resource type
  const create = (endpoint, instance, successCallback, errorCallback) => {
    Axios.post(endpoint, instance, headers.current)
      .then((response) => {
        console.log(response);
        if (successCallback) successCallback();
      })
      .catch((error) => {
        console.log(error);
        if (errorCallback) errorCallback();
      });
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
