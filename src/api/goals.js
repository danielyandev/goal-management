import axios from "axios"
import { API_URL } from "../config/constants"

export const createGoal = async (goal) => {
  return await axios.post(API_URL + "/goals", goal)
}

export const getGoals = async (params) => {
  return await axios.get(API_URL + "/goals", { params })
}

export const reviewGoal = async (params) => {
  return await axios.post(API_URL + "/goals/review", params)
}
