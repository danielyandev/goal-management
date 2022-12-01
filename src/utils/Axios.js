import axios from "axios"

export const setupAxios = (keycloak) => {
  axios.defaults.headers = {
    Authorization: "Bearer " + keycloak.token
  }
}
