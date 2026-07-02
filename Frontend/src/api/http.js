import axios from "axios"

export const httpRequest = axios.create({
    baseURL = "http://locahost:5000"
})