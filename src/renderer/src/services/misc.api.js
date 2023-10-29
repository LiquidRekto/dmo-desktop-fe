import '../constants/apiEndpoints'
import { API_ENDPOINT_MISC_SUMMARY } from '../constants/apiEndpoints'
import AxiosInstance from "./axios.init"

export const getDashboardSummary = async () => {
    try {
        const res = AxiosInstance.get(API_ENDPOINT_MISC_SUMMARY)
        return res
    }
    catch (err) {
        return [err]
    }
}