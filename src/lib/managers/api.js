import axios from "axios";

// A class providing api request methods for an input resource type
export class APIManager {
  constructor(resourceType) {
    this.endpoint = resourceType.endpoint; // url endpoint for resource requests
    this.setState = resourceType.setState; // react resource setState function
    this.state = resourceType.state; // react resource state
  }

  // Loads all the initial data of a resource type into state
  read(token) {
    axios
      .get(this.endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => this.setState(response.data))
      .catch((error) => console.log(error));
  }
  // Creates an instance of a resource type
  create(instance, token) {
    axios
      .post(this.endpoint, instance, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
  // Updates an instance of a resource type
  update(instance, token) {
    axios
      .patch(`${this.endpoint}${instance.id}/`, instance, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
  // Deletes an instance of a resource type
  delete(instance, token) {
    axios
      .delete(`${this.endpoint}${instance.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
}
