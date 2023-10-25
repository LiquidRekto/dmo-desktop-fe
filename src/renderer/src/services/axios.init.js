import axios, { Axios } from 'axios'


const AxiosInstance = axios.create({
    baseURL: window.env.BACKEND_BASE_URL
})

export default AxiosInstance