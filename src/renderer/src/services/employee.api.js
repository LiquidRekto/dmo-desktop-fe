import '../constants/apiEndpoints'
import { API_ENDPOINT_EMPLOYEES_GETALL, API_ENDPOINT_EMPLOYEES_GETSINGLE } from '../constants/apiEndpoints';
import AxiosInstance from "./axios.init";

export const getAllEmployees = async () => {
    try {
        const res = AxiosInstance.get(API_ENDPOINT_EMPLOYEES_GETALL)
        return res
    }
    catch (err) {
        return [err]
    }
}

export const getSingleEmployee = async (userId) => {
    try {
        let params = {
            "id": userId
        }
        const res = AxiosInstance.get(API_ENDPOINT_EMPLOYEES_GETSINGLE, params)
        return res
    }
    catch (err) {
        return [err]
    }
}