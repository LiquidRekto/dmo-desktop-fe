import '../constants/apiEndpoints'
import { API_ENDPOINT_HISTORY_GETALL } from '../constants/apiEndpoints';
import AxiosInstance from "./axios.init";


export const getAllHistory = async () => {
    try {
        const res = AxiosInstance.get(API_ENDPOINT_HISTORY_GETALL);
        return res
    }
    catch (e) {
        return [err]
    }
}