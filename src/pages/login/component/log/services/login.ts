import { AxiosPromise } from "axios"
import { instance } from "../../../../../Providers/axiosClient"

export const loginApi = async (url: string = "/login", data: object): Promise<AxiosPromise> => {
    const res = await instance.post(url, data)
    return res.data;
}