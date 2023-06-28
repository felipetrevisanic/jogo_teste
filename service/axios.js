import axios from "axios";


const dadosAPI = axios.create({baseURL: 'http://localhost:3001/'})

function getDados() {
    const res = dadosAPI.get('/')

    return res.data
}

export {
    getDados
}