import axios from 'axios'
import { getServer } from './getServer'

const api = axios.create({
    baseURL: getServer()
})

export default api