import axios from "axios"

const API_URL = `${import.meta.env.VITE_DOMAIN}/api/users/`

// login user
const login = async (userData) => {
    try {
        const response = await axios.post(API_URL + 'login', userData)
        console.log(response.data)
    
        if(response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
        } 
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


// logout user
const logout = () => {
    localStorage.removeItem('user')
}

// update user
const update = async (userData) => {
    const token = JSON.parse(localStorage.getItem('user'))['token']
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios.post(API_URL + 'me/update', userData, config)
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    } 
    return response.data
}

const getUser = async () => {
    const token = JSON.parse(localStorage.getItem('user'))['token']
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    try {
        const response = await axios.get(API_URL + 'me', config)
        console.log(response.data)
    
        // if(response.data) {
        //     localStorage.setItem('user', JSON.stringify(response.data))
        // } 
        return response.data

    } catch (error) {
        if (error.response.status === 400) {
            console.log(error.response)
            // throw new Error(error.response.data.msg)
        } else {
            console.log("An error occurred!")
            // throw new Error("An error occurred!")
        }
    }
}

const authService = {
    login,
    logout,
    update,
    getUser
}

export default authService