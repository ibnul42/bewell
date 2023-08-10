import axios from "axios"
import { json } from "react-router-dom"

const API_URL = `${import.meta.env.VITE_DOMAIN}/api`

// login user
const getSteps = async () => {
    const response = await axios.get(API_URL + '/admin/all-steps',)

    // if (response.data) {
    //     localStorage.setItem('user', JSON.stringify(response.data))
    // }
    return response.data
}

const getStep = async (id) => {
    const token = JSON.parse(localStorage.getItem('user')).token
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    try {
        const response = await axios.get(API_URL + `/admin/step/${id}`, config)
        return response.data
    } catch (error) {
        if (error.response.status === 404) {
            throw new Error(error.response.data.msg)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

const updateStep = async (data) => {
    const token = JSON.parse(localStorage.getItem('user')).token
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    try {
        const response = await axios.put(API_URL + `/admin/step/${data.id}`, data, config)
        return response.data
    } catch (error) {
        if (error.response.status === 404) {
            throw new Error(error.response.data.message)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

const addContact = async (data) => {
    try {
        const response = await axios.post(API_URL + '/admin/contact/create', data)
        return response.data
    } catch (error) {
        if (error.response.status === 404) {
            throw new Error(error.response.data.msg)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

const getContacts = async () => {
    const token = JSON.parse(localStorage.getItem('user')).token
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    try {
        const response = await axios.get(API_URL + '/admin/contacts', config)
        return response.data
    } catch (error) {
        if (error.response.status === 404) {
            throw new Error(error.response.data.msg)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

const getWeightLossFaq = async () => {
    try {
        const response = await axios.get(API_URL + '/admin/weightlossfaq')
        return response.data
    } catch (error) {
        if (error.response.status === 404) {
            throw new Error(error.response.data.msg)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

const singleWeightLossFaq = async (id) => {
    const token = JSON.parse(localStorage.getItem('user')).token
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    try {
        const response = await axios.get(`${API_URL}/admin/weightlossfaq/${id}`, config)
        return response.data
    } catch (error) {
        if (error.response.status === 404) {
            throw new Error(error.response.data.msg)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

const editWeightLossFaq = async ({ data, id }) => {
    const token = JSON.parse(localStorage.getItem('user')).token
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    try {
        const response = await axios.put(`${API_URL}/admin/weightlossfaq/${id}`, data, config)
        return response.data
    } catch (error) {
        if (error.response.status === 404) {
            throw new Error(error.response.data.msg)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

const deleteWeightLossFaq = async (id) => {
    const token = JSON.parse(localStorage.getItem('user')).token
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    try {
        const response = await axios.delete(API_URL + '/admin/weightlossfaq/' + id, config)
        return response.data
    } catch (error) {
        if (error.response.status === 404) {
            throw new Error(error.response.data.msg)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

const createWeightLossFaq = async (data) => {
    const token = JSON.parse(localStorage.getItem('user')).token
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    try {
        const response = await axios.post(API_URL + '/admin/weightlossfaq', data, config)
        return response.data
    } catch (error) {
        if (error.response.status === 404) {
            throw new Error(error.response.data.msg)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

const getGeneralFaq = async () => {
    try {
        const response = await axios.get(API_URL + '/admin/generalfaq')
        return response.data
    } catch (error) {
        if (error.response.status === 404) {
            throw new Error(error.response.data.msg)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

const singleGeneralFaq = async (id) => {
    const token = JSON.parse(localStorage.getItem('user')).token
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    try {
        const response = await axios.get(`${API_URL}/admin/generalfaq/${id}`, config)
        return response.data
    } catch (error) {
        if (error.response.status === 404) {
            throw new Error(error.response.data.msg)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

const editGeneralFaq = async ({ data, id }) => {
    const token = JSON.parse(localStorage.getItem('user')).token
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    try {
        const response = await axios.put(`${API_URL}/admin/generalfaq/${id}`, data, config)
        return response.data
    } catch (error) {
        if (error.response.status === 404) {
            throw new Error(error.response.data.msg)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

const deleteGeneralFaq = async (id) => {
    const token = JSON.parse(localStorage.getItem('user')).token
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    try {
        const response = await axios.delete(API_URL + '/admin/generalfaq/' + id, config)
        return response.data
    } catch (error) {
        if (error.response.status === 404) {
            throw new Error(error.response.data.msg)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

const createGeneralFaq = async (data) => {
    const token = JSON.parse(localStorage.getItem('user')).token
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    try {
        const response = await axios.post(API_URL + '/admin/generalfaq', data, config)
        return response.data
    } catch (error) {
        if (error.response.status === 404) {
            throw new Error(error.response.data.msg)
        } else {
            throw new Error("An error occurred!")
        }
    }
}



const authService = {
    getSteps,
    getStep,
    addContact,
    getContacts,
    updateStep,
    getWeightLossFaq,
    deleteWeightLossFaq,
    createWeightLossFaq,
    singleWeightLossFaq,
    editWeightLossFaq,
    getGeneralFaq,
    singleGeneralFaq,
    editGeneralFaq,
    deleteGeneralFaq,
    createGeneralFaq
}

export default authService