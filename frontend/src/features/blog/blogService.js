import axios from "axios"

const API_URL = `${import.meta.env.VITE_DOMAIN}/api/admin`

// create a new blog
const createBlog = async (data) => {
    const token = JSON.parse(localStorage.getItem('user'))['token']
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    try {
        const response = await axios.post(API_URL + '/blog', data, config)

        return response.data.message

    } catch (error) {
        if (error.response.status === 400) {
            throw new Error(error.response.data.msg)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

// get all blog
const getBlogs = async () => {
    try {
        const response = await axios.get(API_URL + '/blogs')

        return response.data

    } catch (error) {
        if (error.response.status === 400) {
            throw new Error(error.response.data.msg)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

// get single blog
const getSingleBlog = async (id) => {
    try {
        const response = await axios.get(API_URL + '/blog/' + id)

        return response.data

    } catch (error) {
        if (error.response.status === 400) {
            throw new Error(error.response.data.message)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

// edit single blog
const editSingleBlog = async ({ id, data }) => {
    const token = JSON.parse(localStorage.getItem('user'))['token']
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    try {
        const response = await axios.put(API_URL + '/blog/' + id, data, config)

        return response.data

    } catch (error) {
        if (error.response.status === 404) {
            throw new Error(error.response.data.message)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

// edit single blog
const deleteBlog = async (id) => {
    const token = JSON.parse(localStorage.getItem('user'))['token']
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    try {
        const response = await axios.delete(API_URL + '/blog/' + id, config)

        return response.data

    } catch (error) {
        if (error.response.status === 404) {
            throw new Error(error.response.data.message)
        } else {
            throw new Error("An error occurred!")
        }
    }
}

const authService = {
    createBlog,
    getBlogs,
    getSingleBlog,
    editSingleBlog,
    deleteBlog
}

export default authService