import axios from 'axios'

const baseUrl = 'http://localhost:3001/data'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}
const create = async () => {
    const data = {
        a: 1,
        b: 2
    }
    const response = await axios.post(baseUrl, data)
    return response.data
}


export default { getAll, create }