import React from "react";
import axios from "axios";

import { routes } from "../config/routes";
import { GraphContext } from "../contexts/graph";

const headers = {
  "Content-type": "application/json",
};

// A hook to handle all backend rest api requests for a resource type
export const useAPI = () => {
  // Loads all the initial data of a resource type into state
  const loadResource = (type) => {
    axios
      .get(type.endpoint, headers)
      .then((response) => type.setState(response.data))
      .catch((error) => console.log(error));
  };

  // Updates an instance of a resource type
  const updateResource = (type, id) => {
    axios
      .patch(`${type.endpoint}${id}/`, headers)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  // Deletes an instance of a resource type
  const deleteResource = (type, id) => {
    axios
      .delete(`${type.endpoint}${id}/`, headers)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  // Creates an instance of a resource type
  const createResource = (type, instance) => {
    axios
      .post(type.endpoint, instance, headers)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return { loadResource, createResource, updateResource, deleteResource };
};
