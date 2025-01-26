import axios from "axios";

const ApiInstance = axios.create({
    baseURL: 'http://hackatonebackend.vercel.app'
})

export default ApiInstance;