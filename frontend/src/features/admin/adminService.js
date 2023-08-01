import axios from "axios"

const API_URL = `${import.meta.env.VITE_DOMAIN}/api`

// login user
const getSteps = async () => {
    const response = await axios.get(API_URL + '/admin/all-steps',)

    // if (response.data) {
    //     localStorage.setItem('user', JSON.stringify(response.data))
    // }
    return response.data
}

const addContact = async (data) => {
    try {
        const response = await axios.post(API_URL + '/admin/contact/create', data)
        return response.data
    } catch (error) {
        if (error.response.status === 400) {
            console.log(error.response)
            throw new Error(error.response.data.msg)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

const getContacts = async () => {
    try {
        const response = await axios.get(API_URL + '/admin/contacts')
        return response.data
    } catch (error) {
        if (error.response.status === 400) {
            console.log(error.response)
            throw new Error(error.response.data.msg)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

const authService = {
    getSteps,
    addContact,
    getContacts
}

export default authService