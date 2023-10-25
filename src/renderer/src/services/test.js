import '../constants/apiEndpoints'
import AxiosInstance from "./axios.init";
import { API_ENDPOINT_TEST_GREETUSER } from "../constants/apiEndpoints";

export const greetUser = async (userId) => {
    try {
        const { data } = AxiosInstance.get(`${API_ENDPOINT_TEST_GREETUSER}/${userId}`)
        return [null, data]
    }
    catch (err) {
        return [err]
    }
}

export const getUsers = async () => {
    try {
        const { data } = await AxiosInstance.get(API_ENDPOINT_TEST_GREETUSER)
        return [null, data]
    }
    catch (err) {
        return [err]
    }
}
