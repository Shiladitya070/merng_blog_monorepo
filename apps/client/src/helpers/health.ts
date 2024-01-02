import axios from "axios"

export const healthCheck = async () => {
    return (await axios.get(process.env.SERVER! + '/health')).data
}