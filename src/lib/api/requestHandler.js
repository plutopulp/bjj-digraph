import axios from "axios";

// A class providing api handlers/request methods
// for an input resource type
export class APIRequestHandler {
  constructor(resourceType, token) {
    this.endpoints = resourceType.endpoints; // url endpoint for resource requests
    this.setState = resourceType.setState; // react resource setState function
    this.state = resourceType.state; // react resource state
    // Access token should be provided on instantiation
    this.headers = { headers: { Authorization: `Bearer ${token}` } };
  }

  // Loads all the initial data of a resource type into state
  read() {
    axios
      .get(this.endpoints.list, this.headers)
      .then((response) => this.setState(response.data))
      .catch((error) => console.log(error));
  }
  // Creates an instance of a resource type
  create(instance) {
    axios
      .post(this.endpoints.list, instance, this.headers)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
  // Updates an instance of a resource type
  update(instance) {
    axios
      .patch(`${this.endpoint}${instance.id}/`, instance, this.headers)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
  // Deletes an instance of a resource type
  delete(instance) {
    axios
      .delete(`${this.endpoint}${instance.id}/`, this.headers)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
}
