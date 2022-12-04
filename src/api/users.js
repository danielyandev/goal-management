import axios from "axios"
import { API_URL } from "../config/constants"

export const getUsers = async () => {
  return await axios.get(API_URL + "/users")
}
