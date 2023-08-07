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
        if (error.response.status === 400) {
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
        if (error.response.status === 400) {
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
        if (error.response.status === 400) {
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
    updateStep
}

export default authService