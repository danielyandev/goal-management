import axios from "axios"

export const setupAxios = (keycloak) => {
  if (keycloak.token) {
    axios.defaults.headers = {
      Authorization: "Bearer " + keycloak.token
    }
  }
}
