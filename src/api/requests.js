import axios from "axios"
import { API_URL } from "../config/constants"

export const getUsers = async () => {
  return await axios.get(API_URL + "/users")
}

export const createGoal = async (goal) => {
  return await axios.post(API_URL + "/goals", goal)
}
