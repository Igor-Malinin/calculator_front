import axios from 'axios'

export default axios.create({
  baseURL: "http://localhost:8191/api",
  headers: {
    'Content-Type': 'application/json'
  }
})