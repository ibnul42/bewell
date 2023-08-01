import axios from "axios"

const API_URL = `${import.meta.env.VITE_DOMAIN}/api/admin`

// login user
const getSteps = async () => {
    const response = await axios.get(API_URL + '/all-steps',)
    console.log(response.data)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const addContact = async (data) => {
    // if(response.data) {
    //     localStorage.setItem('user', JSON.stringify(response.data))
    // } 
    // return response.data

    // const token = JSON.parse(localStorage.getItem("user"))["token"]
    //   const config = {
    //     headers: { Authorization: `Bearer ${token}` },
    //   }

    try {
        const response = await axios.post(API_URL + '/contact/create', data)
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
    addContact
}

export default authService