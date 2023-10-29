import { API_ENDPOINT_SKILLS_GETALL } from "../constants/apiEndpoints";
import AxiosInstance from "./axios.init";

export const getAllSkills = async () => {
    try {
        const res = AxiosInstance.get(API_ENDPOINT_SKILLS_GETALL)
        return res
    }
    catch (err) {
        return [err]
    }
}