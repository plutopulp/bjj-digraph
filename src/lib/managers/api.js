import axios from "axios";

const headers = {
  "Content-type": "application/json",
};

// A class providing api request methods for an input resource type
export class APIManager {
  constructor(resourceType) {
    this.endpoint = resourceType.endpoint; // url endpoint for resource requests
    this.setState = resourceType.setState; // react resource setState function
    this.state = resourceType.state; // react resource state
  }

  // Loads all the initial data of a resource type into state
  read() {
    axios
      .get(this.endpoint, headers)
      .then((response) => this.setState(response.data))
      .catch((error) => console.log(error));
  }
  // Creates an instance of a resource type
  create(instance) {
    axios
      .post(this.endpoint, instance, headers)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
  // Updates an instance of a resource type
  update(instance) {
    axios
      .patch(`${this.endpoint}${instance.id}/`, instance, headers)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
  // Deletes an instance of a resource type
  delete(instance) {
    axios
      .delete(`${this.endpoint}${instance.id}/`, headers)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
}
