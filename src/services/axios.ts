import axios from "axios"

export const api = axios.create({
  baseURL: "http://192.168.1.179:3000/medmapangola.ao",
  withCredentials: true,
})
