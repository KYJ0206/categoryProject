import { AXIOS } from "./axios";


export const testApi = async (url) => {
    try {
        const res = await AXIOS.get(url)
    
        const cateList = res.data
        return cateList
    } catch(e) {
        console.error(e)
    }
}
